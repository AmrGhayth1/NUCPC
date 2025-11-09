import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { TrophyIcon, ClockIcon, ArrowUpIcon, ArrowDownIcon, FilterIcon, DownloadIcon } from 'lucide-react';
export function ContestStandings() {
  const contest = {
    id: '1',
    title: 'NU ICPC Club Contest #45',
    timeLeft: '1:23:45',
    totalParticipants: 128
  };
  const standings = [{
    rank: 1,
    participant: 'tourist',
    name: 'Gennady Korotkevich',
    score: 500,
    solved: 5,
    penalty: 234,
    problemResults: [{
      id: 'A',
      result: 'accepted',
      attempts: 1,
      time: 12
    }, {
      id: 'B',
      result: 'accepted',
      attempts: 1,
      time: 45
    }, {
      id: 'C',
      result: 'accepted',
      attempts: 2,
      time: 89
    }, {
      id: 'D',
      result: 'accepted',
      attempts: 1,
      time: 100
    }, {
      id: 'E',
      result: 'accepted',
      attempts: 1,
      time: 120
    }]
  }, {
    rank: 2,
    participant: 'Um_nik',
    name: 'Alexander Andreev',
    score: 400,
    solved: 4,
    penalty: 289,
    problemResults: [{
      id: 'A',
      result: 'accepted',
      attempts: 1,
      time: 15
    }, {
      id: 'B',
      result: 'accepted',
      attempts: 2,
      time: 67
    }, {
      id: 'C',
      result: 'accepted',
      attempts: 1,
      time: 98
    }, {
      id: 'D',
      result: 'accepted',
      attempts: 1,
      time: 145
    }, {
      id: 'E',
      result: 'wrong',
      attempts: 3,
      time: 0
    }]
  }];
  const ContestNav = () => <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-blue-800">{contest.title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            <ClockIcon className="h-4 w-4" />
            Time left: {contest.timeLeft}
          </div>
        </div>
        <div className="flex gap-2">
          <Link to={`/contests/${contest.id}`} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">
            Overview
          </Link>
          <Link to={`/contests/${contest.id}/problems`} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">
            Problems
          </Link>
          <Link to={`/contests/${contest.id}/standings`} className="px-4 py-2 bg-blue-50 text-blue-600 rounded font-medium">
            Standings
          </Link>
          <Link to={`/contests/${contest.id}/submissions`} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">
            Submissions
          </Link>
        </div>
      </div>
    </div>;
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <ContestNav />
        <div className="bg-white shadow-sm rounded-lg">
          {/* Standings Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <TrophyIcon className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">Standings</span>
              </div>
              <span className="text-sm text-gray-600">
                {contest.totalParticipants} participants
              </span>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded hover:bg-gray-50">
                <FilterIcon className="h-4 w-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded hover:bg-gray-50">
                <DownloadIcon className="h-4 w-4" />
                Download
              </button>
            </div>
          </div>
          {/* Standings Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Who
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Penalty
                  </th>
                  {['A', 'B', 'C', 'D', 'E'].map(problemId => <th key={problemId} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {problemId}
                    </th>)}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {standings.map(row => <tr key={row.rank} className="hover:bg-blue-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="font-medium">{row.rank}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link to={`/user/${row.participant}`} className="text-blue-600 hover:underline font-medium">
                        {row.participant}
                      </Link>
                      <div className="text-sm text-gray-500">{row.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-medium">{row.score}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row.penalty}
                    </td>
                    {row.problemResults.map((problem, idx) => <td key={idx} className="px-6 py-4 whitespace-nowrap text-center">
                        <div className={`inline-flex flex-col items-center ${problem.result === 'accepted' ? 'text-green-600' : problem.result === 'wrong' ? 'text-red-600' : 'text-gray-400'}`}>
                          <span className="font-medium">
                            {problem.time || '-'}
                          </span>
                          {problem.attempts > 0 && <span className="text-xs">
                              {problem.attempts} attempt
                              {problem.attempts > 1 ? 's' : ''}
                            </span>}
                        </div>
                      </td>)}
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}