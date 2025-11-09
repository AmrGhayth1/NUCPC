import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AlertCircleIcon } from 'lucide-react';
import type { Contest, CreateContest } from '../types';
import {createContestService} from '../services/contest';
export function CreateContestPage() {
  const [formData, setFormData] = useState<CreateContest>({
    name: ''
  });
  const [error, setError] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement API call
      const contestData = await createContestService(formData)
      console.log('Contest data:', contestData);
      
    } catch (err) {
      setError('Failed to create contest. Please try again.');
    }
  };
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-blue-800 mb-6">
              Create New Contest
            </h1>
            {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center">
                <AlertCircleIcon className="h-5 w-5 mr-2" />
                {error}
              </div>}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Contest Name <span className="text-red-500">*</span>
                </label>
                <input id="name" type="text" value={formData.name || ''} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter contest name" required />
                <p className="mt-1 text-sm text-gray-500">
                  Give your contest a descriptive name
                </p>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Create Contest
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}