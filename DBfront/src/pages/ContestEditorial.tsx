import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { BookOpenIcon, ClockIcon, CheckCircleIcon, CodeIcon, ChevronRightIcon } from 'lucide-react';
export function ContestEditorial() {
  const contest = {
    id: '1',
    title: 'NU ICPC Club Contest #45',
    author: 'Dr. Ahmed Hassan',
    problems: [{
      id: 'A',
      name: 'Dynamic Array',
      difficulty: 'Easy',
      editorial: {
        approach: 'The solution uses a greedy approach...',
        complexity: 'Time Complexity: O(n), Space Complexity: O(1)',
        code: `int solve() {
  int n, m, a;
  cin >> n >> m >> a;
  return ((n + a - 1) / a) * ((m + a - 1) / a);
}`,
        author: 'Sarah Ahmed',
        tags: ['greedy', 'math']
      }
    }
    // ... more problems
    ]
  };
  const ContestNav = () => <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-blue-800">{contest.title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            <BookOpenIcon className="h-4 w-4" />
            Editorial by {contest.author}
          </div>
        </div>
        <div className="flex gap-2">
          <Link to={`/contests/${contest.id}`} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">
            Overview
          </Link>
          <Link to={`/contests/${contest.id}/problems`} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">
            Problems
          </Link>
          <Link to={`/contests/${contest.id}/standings`} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">
            Standings
          </Link>
          <Link to={`/contests/${contest.id}/editorial`} className="px-4 py-2 bg-blue-50 text-blue-600 rounded font-medium">
            Editorial
          </Link>
        </div>
      </div>
    </div>;
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <ContestNav />
        <div className="space-y-6">
          {contest.problems.map(problem => <div key={problem.id} className="bg-white shadow-sm rounded-lg">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">{problem.id}.</span>
                    <h2 className="font-medium text-blue-800">
                      {problem.name}
                    </h2>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      {problem.difficulty}
                    </span>
                  </div>
                  <Link to={`/contests/${contest.id}/problem/${problem.id}`} className="text-blue-600 hover:underline text-sm flex items-center gap-1">
                    View Problem
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="p-6 space-y-6">
                <section>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Solution Approach
                  </h3>
                  <p className="text-gray-600">{problem.editorial.approach}</p>
                </section>
                <section>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Complexity Analysis
                  </h3>
                  <p className="text-gray-600">
                    {problem.editorial.complexity}
                  </p>
                </section>
                <section>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Implementation
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">C++ Implementation</span>
                      <button className="text-gray-400 hover:text-white">
                        Copy
                      </button>
                    </div>
                    <pre className="text-sm text-white overflow-x-auto">
                      <code>{problem.editorial.code}</code>
                    </pre>
                  </div>
                </section>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CodeIcon className="h-4 w-4" />
                    Author: {problem.editorial.author}
                  </div>
                  <div className="flex gap-2">
                    {problem.editorial.tags.map(tag => <span key={tag} className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600">
                        {tag}
                      </span>)}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </main>
      <Footer />
    </div>;
}