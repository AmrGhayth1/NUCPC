import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useAuth } from '../contexts/AuthContext';
import { ClockIcon, UsersIcon, TrophyIcon, FileTextIcon, BarChart2Icon, CheckCircleIcon } from 'lucide-react';
export function ContestDetails() {
  const {
    user
  } = useAuth();
  const contest = {
    id: 1,
    title: 'NU ICPC Club Contest #45',
    date: 'October 25, 2023',
    time: '2:00 PM - 4:00 PM',
    duration: '2 hours',
    registrationDeadline: 'October 24, 2023 11:59 PM',
    participants: 128,
    difficulty: 'Intermediate',
    description: 'This contest focuses on dynamic programming and graph algorithms. Perfect for those preparing for ICPC regionals.',
    problems: [{
      id: 'A',
      name: 'Dynamic Array',
      difficulty: 'Easy',
      solved: 45
    }, {
      id: 'B',
      name: 'Tree Distances',
      difficulty: 'Medium',
      solved: 32
    }, {
      id: 'C',
      name: 'Network Flow',
      difficulty: 'Hard',
      solved: 12
    }, {
      id: 'D',
      name: 'Shortest Paths',
      difficulty: 'Medium',
      solved: 28
    }, {
      id: 'E',
      name: 'DP Optimization',
      difficulty: 'Hard',
      solved: 8
    }],
    rules: ['Contest duration is exactly 2 hours', 'Participants can use C++, Java, or Python', 'Internet access is restricted to contest page only', 'Collaboration between participants is not allowed']
  };
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Contest Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h1 className="text-2xl font-bold text-blue-800 mb-2 md:mb-0">
                {contest.title}
              </h1>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Register Now
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center text-gray-600">
                <ClockIcon className="h-5 w-5 mr-2" />
                <div>
                  <div className="text-sm font-medium">Date & Time</div>
                  <div className="text-sm">{contest.date}</div>
                  <div className="text-sm">{contest.time}</div>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <UsersIcon className="h-5 w-5 mr-2" />
                <div>
                  <div className="text-sm font-medium">Participants</div>
                  <div className="text-sm">
                    {contest.participants} registered
                  </div>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <TrophyIcon className="h-5 w-5 mr-2" />
                <div>
                  <div className="text-sm font-medium">Difficulty</div>
                  <div className="text-sm">{contest.difficulty}</div>
                </div>
              </div>
            </div>
          </div>
          {/* Contest Description */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              About this Contest
            </h2>
            <p className="text-gray-600 mb-4">{contest.description}</p>
            <div className="border-t pt-4 mt-4">
              <h3 className="font-medium text-gray-800 mb-2">Contest Rules</h3>
              <ul className="list-disc list-inside space-y-1">
                {contest.rules.map((rule, index) => <li key={index} className="text-gray-600 text-sm">
                    {rule}
                  </li>)}
              </ul>
            </div>
          </div>
          {/* Problems Preview */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Problems</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Problem Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Difficulty
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Solved By
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contest.problems.map(problem => <tr key={problem.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {problem.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-blue-600 hover:underline cursor-pointer">
                          {problem.name}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                          {problem.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {problem.solved} users
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