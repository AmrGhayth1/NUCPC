const express = require('express');
const router = express.Router();
const supabase = require('../services/supabase');

// Create a new problem
router.post('/', async (req, res) => {
  const {
    title,
    description,
    time_limit,
    memory_limit,
    sample_input,
    sample_output,
    test_cases,
    contest_id,
    difficulty = "Easy",
    rank = 0,
  } = req.body;

if (!title || !time_limit || !memory_limit || !description || !sample_output) {
  return res.status(400).json({ error: 'Missing required fields' });
}


  try {
    // Insert the problem
    const { data: problemData, error: problemError } = await supabase
      .from('problems')
      .insert([
        {
          title,
          description,
          time_limit,
          memory_limit,
          sample_input,
          sample_output,
          contest_id,
          difficulty,
          rank
        }
      ])
      .select()
      .single();

    if (problemError) {
      console.error('Problem insert error:', problemError.message);
      return res.status(500).json({ error: problemError.message });
    }

    const problem_id = problemData.id;

    // Create dummy file paths for test cases (replace with real storage logic if needed)
    const testCaseInserts = test_cases.map((tc, index) => ({
      problem_id,
      input_file_path: `problem-${problem_id}/input-${index}.txt`,
      output_file_path: `problem-${problem_id}/output-${index}.txt` ,
      is_sample: false
    }));

    const { error: testCaseError } = await supabase
      .from('test_cases')
      .insert(testCaseInserts);

    if (testCaseError) {
      console.error('Test case insert error:', testCaseError.message);
      return res.status(500).json({ error: testCaseError.message });
    }

    res.status(201).json({ message: 'Problem created successfully', problem_id });
  } catch (err) {
    console.error('Server error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
