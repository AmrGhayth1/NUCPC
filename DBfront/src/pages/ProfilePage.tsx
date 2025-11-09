import React, { cloneElement } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useAuth } from '../contexts/AuthContext';
import { TrophyIcon, CodeIcon, CheckCircleIcon, BarChart2Icon } from 'lucide-react';
export function ProfilePage() {
  const {
    user
  } = useAuth();
  if (!user) {
    return null; // or redirect to login
  }
  const recentSubmissions = [{
    id: 1,
    problem: 'Binary Search',
    status: 'Accepted',
    date: '2023-10-15',
    language: 'C++'
  }, {
    id: 2,
    problem: 'Dynamic Programming',
    status: 'Wrong Answer',
    date: '2023-10-14',
    language: 'Python'
  }, {
    id: 3,
    problem: 'Graph Theory',
    status: 'Time Limit',
    date: '2023-10-13',
    language: 'Java'
  }];
  const statistics = [{
    label: 'Problems Solved',
    value: user.solvedProblems || 0,
    icon: <CheckCircleIcon />
  }, {
    label: 'Total Submissions',
    value: user.submissions || 0,
    icon: <CodeIcon />
  }, {
    label: 'Current Rating',
    value: user.rating || 0,
    icon: <BarChart2Icon />
  }];
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-blue-800">
                  {user.name}
                </h1>
                <p className="text-gray-600">{user.email}</p>
                {user.team && <div className="mt-2 flex items-center">
                    <TrophyIcon className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-gray-700">Team: {user.team}</span>
                  </div>}
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {user.rating}
                </div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {statistics.map((stat, index) => <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div className="text-blue-600">
                    {cloneElement(stat.icon as any, {
                  className: 'h-6 w-6'
                })}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                </div>
                <div className="mt-2 text-gray-600">{stat.label}</div>
              </div>)}
          </div>
          {/* Recent Submissions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Recent Submissions
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Problem
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Language
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentSubmissions.map(submission => <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <a href="#" className="text-blue-600 hover:underline">
                          {submission.problem}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${submission.status === 'Accepted' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {submission.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {submission.language}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {submission.date}
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}