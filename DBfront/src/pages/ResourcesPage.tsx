import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookOpenIcon, FileTextIcon, VideoIcon, LinkIcon } from 'lucide-react';
export function ResourcesPage() {
  const resources = {
    tutorials: [{
      id: 1,
      title: 'Introduction to Competitive Programming',
      type: 'PDF',
      author: 'Dr. Ahmed Hassan',
      difficulty: 'Beginner'
    }, {
      id: 2,
      title: 'Advanced Data Structures',
      type: 'Video',
      author: 'Mohamed Ibrahim',
      difficulty: 'Intermediate'
    }, {
      id: 3,
      title: 'Dynamic Programming Techniques',
      type: 'PDF',
      author: 'Sarah Ahmed',
      difficulty: 'Advanced'
    }],
    practiceProblems: [{
      id: 1,
      title: 'Basic Problem Set',
      count: 50,
      topics: ['Implementation', 'Math', 'Greedy'],
      difficulty: 'Beginner'
    }, {
      id: 2,
      title: 'Graph Algorithms',
      count: 30,
      topics: ['DFS', 'BFS', 'Shortest Paths'],
      difficulty: 'Intermediate'
    }, {
      id: 3,
      title: 'Advanced Algorithms',
      count: 25,
      topics: ['DP', 'Segment Trees', 'Network Flow'],
      difficulty: 'Advanced'
    }]
  };
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            Learning Resources
          </h1>
          <p className="text-gray-600">
            Access our collection of tutorials, practice problems, and learning
            materials
          </p>
        </div>
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              Tutorials and Materials
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resources.tutorials.map(tutorial => <div key={tutorial.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-duration-150">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      {tutorial.type === 'PDF' ? <FileTextIcon className="h-5 w-5 text-red-500 mr-2" /> : <VideoIcon className="h-5 w-5 text-blue-500 mr-2" />}
                      <h3 className="text-lg font-medium text-blue-800">
                        {tutorial.title}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Author: {tutorial.author}</p>
                    <p>Type: {tutorial.type}</p>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded">
                      {tutorial.difficulty}
                    </span>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Access Material
                  </button>
                </div>)}
            </div>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              Practice Problems
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resources.practiceProblems.map(problem => <div key={problem.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-duration-150">
                  <h3 className="text-lg font-medium text-blue-800 mb-4">
                    {problem.title}
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>Number of problems: {problem.count}</p>
                    <div>
                      <p className="mb-2">Topics covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {problem.topics.map((topic, index) => <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                            {topic}
                          </span>)}
                      </div>
                    </div>
                    <div className="pt-2">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded">
                        {problem.difficulty}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Start Practice
                  </button>
                </div>)}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>;
}