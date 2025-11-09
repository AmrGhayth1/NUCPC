import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { TrophyIcon, UsersIcon, AwardIcon } from 'lucide-react';
export function TeamsPage() {
  const teams = [{
    id: 1,
    name: 'Binary Warriors',
    members: ['Ahmed Hassan', 'Mohamed Ali', 'Sarah Ahmed'],
    achievements: ['ICPC Regional Finalist 2023', 'ECPC 2nd Place 2022'],
    division: 'Division 1',
    rating: 2100
  }, {
    id: 2,
    name: 'Code Masters',
    members: ['Youssef Ibrahim', 'Mariam Khaled', 'Omar Essam'],
    achievements: ['ICPC Regional Qualifier 2023'],
    division: 'Division 2',
    rating: 1850
  }, {
    id: 3,
    name: 'Algo Experts',
    members: ['Nour Ahmed', 'Khaled Mohamed', 'Rana Mahmoud'],
    achievements: ['ECPC Finalist 2023'],
    division: 'Division 2',
    rating: 1750
  }];
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Our Teams</h1>
          <p className="text-gray-600">
            Meet the competitive programming teams representing Nile University
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teams.map(team => <div key={team.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-duration-150">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium text-blue-800">
                    {team.name}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {team.division}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <UsersIcon className="h-4 w-4 mr-2" />
                      <span className="font-medium">Team Members</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-600 pl-6">
                      {team.members.map((member, index) => <li key={index}>{member}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <TrophyIcon className="h-4 w-4 mr-2" />
                      <span className="font-medium">Achievements</span>
                    </div>
                    <ul className="list-disc list-inside text-sm text-gray-600 pl-6">
                      {team.achievements.map((achievement, index) => <li key={index}>{achievement}</li>)}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center text-gray-600">
                      <AwardIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">Rating</span>
                    </div>
                    <span className="font-medium text-blue-800">
                      {team.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </main>
      <Footer />
    </div>;
}