export default interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin';
  team?: string;
  rating?: number;
  submissions?: number;
  solvedProblems?: number;
}