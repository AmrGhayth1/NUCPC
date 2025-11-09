export interface Mentor {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}
export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  nu_id: string;
  name: string;
  mentor_id?: string;
  rank: number;
  problems_solved: number;
  created_at: string;
}
export interface Contest {
  id: string;
  name: string;
  created_at: string;
  problems: [Problem]
}
export interface CreateContest {
  name: string;
}
export interface Problem {
  id: string;
  title: string;
  difficulty?: string;
  contest_id?: string;
  rank: number;
  test_cases: any;
  created_at: string;
  time_limit: number;
  memory_limit: number;
  description: string;
  sample_input: string;
  sample_output: string;
}
export interface Submission {
  id: string;
  user_id: string;
  problem_id: string;
  status: 'Accepted' | 'Wrong Answer' | 'Time Limit' | 'Runtime Error';
  execution_time?: number;
  memory_used?: number;
  error_type?: string;
  submitted_at: string;
}
export interface TestCase {
  id: string;
  problem_id: string;
  input_file_path: string;
  output_file_path: string;
  is_sample: boolean;
  created_at: string;
}