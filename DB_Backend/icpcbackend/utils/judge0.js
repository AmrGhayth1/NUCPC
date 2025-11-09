const axios = require('axios');

async function sendToJudge0(source_code, language_id, stdin, expected_output, time_limit, memory_limit) {
  try {
 const response = await axios.post(
  `${process.env.JUDGE0_URL}/submissions?base64_encoded=false&wait=true`,
  {
    source_code,
    language_id,
    stdin,
    expected_output,
    cpu_time_limit: time_limit,
    memory_limit: memory_limit * 1024,
  }
);


    return response.data;
  } catch (error) {
    console.error("Judge0 request failed:", error.message);
    throw new Error("Judge0 execution failed");
  }
}

module.exports = { sendToJudge0 };
