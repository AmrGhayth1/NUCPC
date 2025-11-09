import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CalendarIcon, FilterIcon, PlusIcon, ChevronDownIcon, SendIcon, FileTextIcon } from 'lucide-react';
import {getContestsService} from '../services/contest'
import {Contest} from '../types'

export function ContestsPage() {
  const navigate = useNavigate();
  // States for data fetching, loading, and error
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  // Fetch contests data
  const fetchData = async () => {
    setLoading(true);
    setError(null);  // Reset error state before fetching
    try {
      const fetchedContests = await getContestsService();
      setContests(fetchedContests);
    } catch (err) {
      setError('Failed to fetch contests. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on mount
  }, []);

  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-800">Contests</h1>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      onClick={() => navigate('/contests/create')}>
              <PlusIcon className="h-4 w-4" />
              Create Contest
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      onClick={() => navigate('/problems/create')}>
              <PlusIcon className="h-4 w-4" />
              Create Problem
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50">
              <CalendarIcon className="h-4 w-4" />
              Calendar
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50">
              <FilterIcon className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>
        <div className="space-y-6">
          {contests.map(contest => <div key={contest.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <a href="#" className="text-xl font-medium text-blue-800 hover:underline"
                        onClick={() => navigate(`/contests/${contest.id}`)}>
                      {contest.name}
                    </a>
                  </div>
                  <button onClick={() => navigate(`/contests/${contest.id}`)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Register
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {contest.problems.map(problem => <div key={problem.id} className="p-4 hover:bg-gray-50">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <a onClick={() => navigate(`/problems/${problem.id}`)} className="text-blue-800 hover:underline">
                          {problem.title}
                        </a>
                        <span className={`px-2 py-1 text-xs rounded-full ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                          {problem.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">
                          {problem.rank} rank
                        </span>
                        <button  onClick={() => navigate(`/problems/${problem.id}`)} className="flex items-center gap-2 px-3 py-1.5 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                          <SendIcon className="h-4 w-4" />
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>)}
        </div>
      </main>
      <Footer />
    </div>;
}