import React, { memo } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TrophyIcon, CodeIcon, CheckCircleIcon, BarChart2Icon, StarIcon, CalendarIcon, MapPinIcon } from 'lucide-react';
export function UserProfilePage() {
  const userProfile = {
    id: 'tourist',
    name: 'Gennady Korotkevich',
    country: 'Belarus',
    organization: 'ITMO University',
    rating: 3825,
    maxRating: 3850,
    rank: 'Legendary Grandmaster',
    contributions: 245,
    memberSince: '2009',
    lastSeen: '2 hours ago',
    badges: ['ICPC World Champion', 'Google Code Jam Winner', 'TCO Winner'],
    statistics: {
      problemsSolved: 4500,
      submissions: 5200,
      acceptanceRate: '86.5%',
      contests: 350,
      maxRank: 1
    }
  };
  const recentSubmissions = [{
    id: 1,
    contestId: '1234',
    problem: 'Dynamic Programming',
    verdict: 'Accepted',
    language: 'C++',
    time: '0.124',
    memory: '12800'
  }
  // ... more submissions
  ];
  const recentContests = [{
    id: 1,
    name: 'Codeforces Round #789',
    rank: 1,
    rating: '+15',
    date: 'Oct 15, 2023'
  }
  // ... more contests
  ];
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-blue-800">
                  {userProfile.name}
                </h1>
                <div className="text-xl text-gray-600">@{userProfile.id}</div>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-1" />
                    {userProfile.country}
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    Member since {userProfile.memberSince}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">
                  {userProfile.rating}
                </div>
                <div className="text-sm text-gray-600">
                  max: {userProfile.maxRating}
                </div>
                <div className="mt-1 text-sm font-medium text-purple-600">
                  {userProfile.rank}
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {userProfile.badges.map((badge, index) => <span key={index} className="flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  <StarIcon className="h-4 w-4 mr-1" />
                  {badge}
                </span>)}
            </div>
          </div>
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <StatCard icon={<CheckCircleIcon className="h-6 w-6" />} value={userProfile.statistics.problemsSolved} label="Problems Solved" />
            <StatCard icon={<CodeIcon className="h-6 w-6" />} value={userProfile.statistics.submissions} label="Total Submissions" />
            <StatCard icon={<TrophyIcon className="h-6 w-6" />} value={userProfile.statistics.contests} label="Contests Participated" />
            <StatCard icon={<BarChart2Icon className="h-6 w-6" />} value={userProfile.statistics.acceptanceRate} label="Acceptance Rate" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-blue-800 mb-4">
                  Recent Submissions
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                          When
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                          Problem
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                          Verdict
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                          Lang
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentSubmissions.map(submission => <tr key={submission.id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 text-sm text-gray-500">
                            1 hour ago
                          </td>
                          <td className="px-4 py-2">
                            <a href="#" className="text-blue-600 hover:underline text-sm">
                              {submission.problem}
                            </a>
                          </td>
                          <td className="px-4 py-2">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                              {submission.verdict}
                            </span>
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-600">
                            {submission.language}
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Contest History */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-blue-800 mb-4">
                  Contest History
                </h2>
                <div className="space-y-4">
                  {recentContests.map(contest => <div key={contest.id} className="flex items-center justify-between border-b pb-4">
                      <div>
                        <a href="#" className="text-blue-600 hover:underline text-sm">
                          {contest.name}
                        </a>
                        <div className="text-sm text-gray-500">
                          {contest.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">
                          Rank: {contest.rank}
                        </div>
                        <div className="text-sm text-green-600">
                          {contest.rating}
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}
function StatCard({
  icon,
  value,
  label
}) {
  return <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between">
        <div className="text-blue-600">{icon}</div>
        <div className="text-xl font-bold text-gray-900">{value}</div>
      </div>
      <div className="mt-2 text-sm text-gray-600">{label}</div>
    </div>;
}