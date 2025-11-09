import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SearchIcon, TrophyIcon } from 'lucide-react';
export function RatingPage() {
  const users = [{
    rank: 1,
    handle: 'tourist',
    name: 'Gennady Korotkevich',
    rating: 3875,
    maxRating: 3875,
    country: 'Belarus',
    contribution: '+124'
  }, {
    rank: 2,
    handle: 'ksun48',
    name: 'Kevin Sun',
    rating: 3749,
    maxRating: 3749,
    country: 'United States',
    contribution: '+67'
  }, {
    rank: 3,
    handle: 'Benq',
    name: 'Benjamin Qi',
    rating: 3731,
    maxRating: 3731,
    country: 'United States',
    contribution: '+89'
  }];
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            <TrophyIcon className="h-6 w-6 text-yellow-500" />
            Top Rated Users
          </h1>
          <div className="relative w-64">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input type="text" placeholder="Search users..." className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Who
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Max Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contribution
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map(user => <tr key={user.rank} className="hover:bg-blue-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {user.rank}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <a href="#" className="text-blue-800 hover:underline font-medium">
                        {user.handle}
                      </a>
                      <p className="text-sm text-gray-500">{user.name}</p>
                      <p className="text-xs text-gray-400">{user.country}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-red-600">
                      {user.rating}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">
                      {user.maxRating}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-green-600">
                      {user.contribution}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>;
}