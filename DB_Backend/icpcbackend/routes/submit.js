const express = require('express');
const supabase = require('../../config/supabaseclient');
const { getFileText, uploadOutput, getOutputPublicUrl } = require('../utils/storage');
const { sendToJudge0 } = require('../utils/judge0');


const router = express.Router();

function normalizeOutput(output) {
  return (output || '').trim().replace(/\r\n/g, '\n');
}

router.post('/', async (req, res) => {
  const { source_code, language_id, problem_id, user_id } = req.body;

  try {
    const { data: submissionData, error: subErr } = await supabase
      .from('submissions')
      .insert([{ problem_id, user_id, source_code, language_id, verdict: 'Processing' }])
      .select()
      .single();

    if (subErr || !submissionData) {
      console.error('Insert submission error:', subErr);
      return res.status(500).json({ error: 'Failed to insert submission' });
    }

    const submissionId = submissionData.id;

    const { data: testCases, error: tcErr } = await supabase
      .from('test_cases')
      .select('*')
      .eq('problem_id', problem_id);

    if (tcErr || !testCases || testCases.length === 0) {
      return res.status(404).json({ error: 'No test cases found' });
    }

    const { data: problemData, error: problemErr } = await supabase
      .from('problems')
      .select('time_limit, memory_limit')
      .eq('id', problem_id)
      .single();

    if (problemErr || !problemData) {
      return res.status(404).json({ error: 'Problem not found' });
    }

    let maxTime = 0;
    let maxMemory = 0;

    for (let i = 0; i < testCases.length; i++) {
      const tc = testCases[i];

      const input = await storage.getFileText('testcases', tc.input_file_path);
      const expected = await storage.getFileText('testcases', tc.output_file_path);

      const result = await sendToJudge0(
        source_code,
        language_id,
        input,
        expected,
        problemData.time_limit,
        problemData.memory_limit
      );

      const actualOutput = normalizeOutput(result.stdout || '');
      const status = result.status.description;
      const time = parseFloat(result.time) || 0;
      const memory = result.memory || 0;

      maxTime = Math.max(maxTime, time);
      maxMemory = Math.max(maxMemory, memory);

      const outputPath = `outputs/${submissionId}/testcase_${i + 1}.txt` ;
      const outputContent = result.stdout || result.stderr || result.compile_output || '';

      await storage.uploadOutput(outputPath, outputContent);

      const { error: insertErr } = await supabase
        .from('submission_results')
        .insert([{
          submission_id: submissionId,
          test_case_id: tc.id,
          verdict: status,
          execution_time: time,
          memory_used: memory,
          user_output_path: outputPath
        }]);

      if (insertErr) {
        console.error('Insert submission_results error:', insertErr);
        return res.status(500).json({ error: 'Failed to insert test result' });
      }

      if (status !== 'Accepted') {
        await supabase.from('submissions')
          .update({
            verdict: status,
            time_used: maxTime,
            memory_used: maxMemory,
            failed_test_case: i + 1
          })
          .eq('id', submissionId);

        const responsePayload = {
          submission_id: submissionId,
          verdict: status,
          maxTime,
          maxMemory,
          failed_test_case_number: i + 1
        };

        if (tc.is_public) {
          responsePayload.input = input;
          responsePayload.expected = expected;
          responsePayload.user_output = actualOutput;
        }

        return res.status(200).json(responsePayload);
      }
    }

    await supabase.from('submissions')
      .update({
        verdict: 'Accepted',
        time_used: maxTime,
        memory_used: maxMemory
      })
      .eq('id', submissionId);

    return res.status(200).json({
      submission_id: submissionId,
      verdict: 'Accepted',
      maxTime,
      maxMemory
    });

  } catch (err) {
    console.error('Submission error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = {
  submitRoutes: router
};

