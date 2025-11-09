import User from "../interfaces/User";
import { endpoints } from "./constants";

interface registerInput {
  email: string;
  password: string;
}

export default async function loginService(input: registerInput): Promise<User> {
  try {
    const response = await fetch(endpoints.login, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    const userFromBackend = result.data;

    const user: User = {
      id: userFromBackend.id,
      name: userFromBackend.name,
      email: userFromBackend.email,
      role: 'student', // or 'admin' if you receive this info from backend
      team: undefined, // Adjust as needed
      rating: userFromBackend.rank ?? 0,
      submissions: 0, // Or extract if provided
      solvedProblems: userFromBackend.problems_solved ?? 0,
    };

    return user;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}
