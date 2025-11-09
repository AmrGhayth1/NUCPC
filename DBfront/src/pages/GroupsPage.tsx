import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { UsersIcon, PlusIcon, SearchIcon } from 'lucide-react';
export function GroupsPage() {
  const groups = [{
    id: 1,
    name: 'ICPC Preparation',
    members: 1234,
    type: 'Public',
    activity: 'High',
    description: 'Group for ICPC contestants to practice and share knowledge'
  }, {
    id: 2,
    name: 'Competitive Programming Study Group',
    members: 567,
    type: 'Public',
    activity: 'Medium',
    description: 'Daily problem solving and discussions'
  }, {
    id: 3,
    name: 'Algorithm Masterclass',
    members: 890,
    type: 'Private',
    activity: 'High',
    description: 'Advanced algorithms and problem-solving techniques'
  }];
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-800">Groups</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <PlusIcon className="h-4 w-4" />
            Create Group
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input type="text" placeholder="Search groups..." className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map(group => <div key={group.id} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-medium text-blue-800 hover:underline">
                    <a href="#">{group.name}</a>
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <UsersIcon className="h-4 w-4" />
                    <span>{group.members} members</span>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded ${group.type === 'Public' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {group.type}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{group.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">
                  Activity: {group.activity}
                </span>
                <button className="text-blue-600 hover:text-blue-800">
                  Join Group
                </button>
              </div>
            </div>)}
        </div>
      </main>
      <Footer />
    </div>;
}