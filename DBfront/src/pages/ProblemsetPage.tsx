import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SearchIcon, FilterIcon } from 'lucide-react';
export function ProblemsetPage() {
  const problems = [{
    id: '1A',
    name: 'Theatre Square',
    tags: ['math', 'implementation'],
    difficulty: 1000,
    solved: '156K'
  }, {
    id: '4A',
    name: 'Watermelon',
    tags: ['brute force', 'math'],
    difficulty: 800,
    solved: '234K'
  }, {
    id: '71A',
    name: 'Way Too Long Words',
    tags: ['strings', 'implementation'],
    difficulty: 800,
    solved: '198K'
  }];
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-blue-800 mb-6">Problemset</h1>
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input type="text" placeholder="Search problems..." className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <FilterIcon className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Difficulty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Solved
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {problems.map(problem => <tr key={problem.id} className="hover:bg-blue-50">
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {problem.id}
                  </td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-blue-800 hover:underline">
                      {problem.name}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {problem.tags.map(tag => <span key={tag} className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600">
                          {tag}
                        </span>)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{problem.difficulty}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    x{problem.solved}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>;
}