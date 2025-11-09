import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CodeIcon, BookIcon, KeyIcon, GitBranchIcon } from 'lucide-react';
export function ApiPage() {
  const endpoints = [{
    method: 'GET',
    path: '/api/user.info',
    description: 'Returns information about one or several users.',
    params: 'handles: String[]'
  }, {
    method: 'GET',
    path: '/api/contest.list',
    description: 'Returns information about contests.',
    params: 'gym: boolean'
  }, {
    method: 'GET',
    path: '/api/problemset.problems',
    description: 'Returns problems with submission statistics.',
    params: 'tags: String[]'
  }];
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-2">
              Codeforces API
            </h1>
            <p className="text-gray-600">
              Access Codeforces data programmatically through our REST API
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a href="#" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <BookIcon className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-medium">Documentation</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive API documentation with examples and guides
              </p>
            </a>
            <a href="#" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <KeyIcon className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-medium">Get API Key</h3>
              </div>
              <p className="text-gray-600">
                Register and get your API key to start making requests
              </p>
            </a>
          </div>
          <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Popular Endpoints
            </h2>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
                      {endpoint.method}
                    </span>
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {endpoint.path}
                    </code>
                  </div>
                  <p className="text-gray-600 mb-2">{endpoint.description}</p>
                  <div className="text-sm text-gray-500">
                    <strong>Parameters:</strong> {endpoint.params}
                  </div>
                </div>)}
            </div>
          </section>
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Code Examples
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Python Example</span>
                  <button className="text-gray-400 hover:text-white">
                    Copy
                  </button>
                </div>
                <pre className="text-sm">
                  <code>{`import requests
api_key = "your_api_key"
handle = "tourist"
response = requests.get(
    "https://codeforces.com/api/user.info",
    params={"handles": handle}
)
data = response.json()
print(data)`}</code>
                </pre>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>;
}