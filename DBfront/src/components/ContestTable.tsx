import React from 'react';
export function ContestTable({
  contests,
  type
}) {
  return <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {type === 'upcoming' ? 'Start' : 'Date'}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {type === 'upcoming' ? 'Length' : 'Writers'}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {type === 'upcoming' ? 'Registration' : 'Solved by'}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contests.map(contest => <tr key={contest.id} className="hover:bg-blue-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div>
                    <div className="text-sm font-medium text-blue-800 hover:underline">
                      <a href="#">{contest.name}</a>
                    </div>
                    <div className="text-xs text-gray-500">{contest.type}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {contest.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {type === 'upcoming' ? contest.duration : contest.writer}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {type === 'upcoming' ? <a href="#" className="text-blue-600 hover:text-blue-900">
                    {contest.registration}
                  </a> : <span className="text-gray-700">{contest.solved}</span>}
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>;
}