import React from 'react';
import { TrophyIcon, BookOpenIcon, UsersIcon, BarChart3Icon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Sidebar() {
  const topTeams = [{
    rank: 1,
    name: 'Binary Warriors',
    achievements: 'Regional Finalist'
  }, {
    rank: 2,
    name: 'Code Masters',
    achievements: 'Regional Qualifier'
  }, {
    rank: 3,
    name: 'Algo Experts',
    achievements: 'Regional Qualifier'
  }];
  return <aside className="w-full md:w-80 space-y-6">
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-blue-800 mb-3 flex items-center">
          <TrophyIcon className="h-5 w-5 mr-2" />
          Top Teams
        </h3>
        <div className="space-y-2">
          {topTeams.map(team => <div key={team.rank} className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-gray-500 w-5">{team.rank}</span>
                <Link to="/teams" className="text-blue-800 hover:underline ml-2">
                  {team.name}
                </Link>
              </div>
              <span className="text-sm text-gray-600">{team.achievements}</span>
            </div>)}
        </div>
        <div className="mt-3 text-right">
          <Link to="/teams" className="text-blue-600 hover:underline text-sm">
            View all teams
          </Link>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-blue-800 mb-3 flex items-center">
          <BookOpenIcon className="h-5 w-5 mr-2" />
          Training Resources
        </h3>
        <ul className="space-y-2">
          <li>
            <Link to="/resources" className="text-blue-800 hover:underline">
              Getting Started Guide
            </Link>
          </li>
          <li>
            <Link to="/resources" className="text-blue-800 hover:underline">
              Practice Problems
            </Link>
          </li>
          <li>
            <Link to="/resources" className="text-blue-800 hover:underline">
              Video Tutorials
            </Link>
          </li>
          <li>
            <Link to="/resources" className="text-blue-800 hover:underline">
              Past Contests
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-medium text-blue-800 mb-3 flex items-center">
          <BarChart3Icon className="h-5 w-5 mr-2" />
          Club Statistics
        </h3>
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-600">Active Members:</span>
            <span className="font-medium">120</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Training Sessions:</span>
            <span className="font-medium">45</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Practice Contests:</span>
            <span className="font-medium">28</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">ICPC Teams:</span>
            <span className="font-medium">12</span>
          </div>
        </div>
      </div>
    </aside>;
}