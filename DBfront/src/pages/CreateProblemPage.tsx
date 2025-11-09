import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AlertCircleIcon, PlusIcon, XIcon } from 'lucide-react';
import { createProblemService } from '../services/problem';
import { getContestsService } from '../services/contest'; // Import the service to fetch contests
import type { Problem, Contest } from '../types';

export function CreateProblemPage() {
  const [formData, setFormData] = useState<Partial<Problem>>({
    title: '',
    difficulty: 'Easy',
    contest_id: undefined,
    rank: 0,
    time_limit: 1,
    memory_limit: 256,
    description: '',
    sample_input: '',
    sample_output: '',
    test_cases: []
  });
  const [error, setError] = useState('');
  const [contests, setContests] = useState<Contest[]>([]); // State to hold fetched contests
  const [loadingContests, setLoadingContests] = useState(true); // State to manage loading state
  const [fetchError, setFetchError] = useState('');

  // Fetch contests when component mounts
  useEffect(() => {
    const fetchContests = async () => {
      try {
        const fetchedContests = await getContestsService();
        setContests(fetchedContests);
        setLoadingContests(false);
      } catch (err) {
        setFetchError('Failed to load contests.');
        setLoadingContests(false);
      }
    };

    fetchContests();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProblemService(formData);
      window.location.href = '/contests'
    } catch (err) {
      setError('Failed to create problem. Please try again.');
    }
  };

  const addTestCase = () => {
    setFormData({
      ...formData,
      test_cases: [...formData.test_cases, {
        input: '',
        output: ''
      }]
    });
  };

  const removeTestCase = (index: number) => {
    setFormData({
      ...formData,
      test_cases: formData.test_cases.filter((_, i) => i !== index)
    });
  };

  const updateTestCase = (index: number, field: 'input' | 'output', value: string) => {
    const newTestCases = [...formData.test_cases];
    newTestCases[index][field] = value;
    setFormData({
      ...formData,
      test_cases: newTestCases
    });
  };
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-blue-800 mb-6">
              Create New Problem
            </h1>

            {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center">
              <AlertCircleIcon className="h-5 w-5 mr-2" />
              {error}
            </div>}

            {fetchError && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center">
              <AlertCircleIcon className="h-5 w-5 mr-2" />
              {fetchError}
            </div>}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Problem Title and Difficulty */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="title">
                    Problem Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={formData.title || ''}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter problem title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="difficulty">
                    Difficulty
                  </label>
                  <select
                    id="difficulty"
                    value={formData.difficulty}
                    onChange={e => setFormData({ ...formData, difficulty: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>

              {/* Contest Selection */}
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="contest_id">
                  Select Contest <span className="text-red-500">*</span>
                </label>
                {loadingContests ? (
                  <p>Loading contests...</p>
                ) : (
                  <select
                    id="contest_id"
                    value={formData.contest_id}
                    onChange={e => setFormData({ ...formData, contest_id: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a contest</option>
                    {contests.map(contest => (
                      <option key={contest.id} value={contest.id}>
                        {contest.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="time_limit">
                    Time Limit (seconds) <span className="text-red-500">*</span>
                  </label>
                  <input id="time_limit" type="number" value={formData.time_limit} onChange={e => setFormData({
                  ...formData,
                  time_limit: Number(e.target.value)
                })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" min="0" step="0.1" required />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="memory_limit">
                    Memory Limit (MB) <span className="text-red-500">*</span>
                  </label>
                  <input id="memory_limit" type="number" value={formData.memory_limit} onChange={e => setFormData({
                  ...formData,
                  memory_limit: Number(e.target.value)
                })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" min="0" required />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="rank">
                    Problem Rank
                  </label>
                  <input id="rank" type="number" value={formData.rank} onChange={e => setFormData({
                  ...formData,
                  rank: Number(e.target.value)
                })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" min="0" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="description">
                  Problem Description <span className="text-red-500">*</span>
                </label>
                <textarea id="description" value={formData.description} onChange={e => setFormData({
                ...formData,
                description: e.target.value
              })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32" placeholder="Enter problem description" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="sample_input">
                    Sample Input <span className="text-red-500">*</span>
                  </label>
                  <textarea id="sample_input" value={formData.sample_input} onChange={e => setFormData({
                  ...formData,
                  sample_input: e.target.value
                })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24" placeholder="Enter sample input" required />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="sample_output">
                    Sample Output <span className="text-red-500">*</span>
                  </label>
                  <textarea id="sample_output" value={formData.sample_output} onChange={e => setFormData({
                  ...formData,
                  sample_output: e.target.value
                })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24" placeholder="Enter sample output" required />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-gray-700">Test Cases</label>
                  <button type="button" onClick={addTestCase} className="flex items-center gap-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                    <PlusIcon className="h-4 w-4" />
                    Add Test Case
                  </button>
                </div>
                <div className="space-y-4">
                  {formData.test_cases.map((testCase, index) => <div key={index} className="relative border rounded-lg p-4">
                      <button type="button" onClick={() => removeTestCase(index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-600">
                        <XIcon className="h-4 w-4" />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 mb-2 text-sm">
                            Input
                          </label>
                          <textarea value={testCase.input} onChange={e => updateTestCase(index, 'input', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 text-sm" placeholder="Enter test case input" />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2 text-sm">
                            Output
                          </label>
                          <textarea value={testCase.output} onChange={e => updateTestCase(index, 'output', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 text-sm" placeholder="Enter expected output" />
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Create Problem
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}