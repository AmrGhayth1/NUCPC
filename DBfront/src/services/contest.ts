import { endpoints } from "./constants";
import {CreateContest, Contest} from '../types'

export async function createContestService(input: CreateContest) {
  fetch(endpoints.contests, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => alert(err))
}

export async function getContestsService(): Promise<[Contest]> {
  try {
      const response = await fetch(endpoints.contests);
  
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


export async function getContestById(id: string): Promise<Contest> {
  try {
    const response = await fetch(`${endpoints.contests}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch contest:', error);
    throw error;
  }
}