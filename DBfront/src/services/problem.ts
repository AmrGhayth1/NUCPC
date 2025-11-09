import { endpoints } from "./constants";
import {Problem} from '../types'

export async function createProblemService(input: Partial<Problem>) {
  fetch(endpoints.problems, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => alert(err))
}

export async function getProblemsService(): Promise<[Problem]> {
  try {
      const response = await fetch(endpoints.problems);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
}