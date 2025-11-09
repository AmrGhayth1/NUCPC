import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CalendarIcon, BookOpenIcon, ClockIcon } from 'lucide-react';
export function TrainingPage() {
  const trainingSessions = [{
    id: 1,
    title: 'Data Structures Workshop',
    date: 'Monday, Oct 16, 2023',
    time: '2:00 PM - 4:00 PM',
    instructor: 'Dr. Ahmed Hassan',
    level: 'Intermediate',
    location: 'Lab 3B',
    description: 'Deep dive into advanced data structures including segment trees and fenwick trees.'
  }, {
    id: 2,
    title: 'Dynamic Programming Practice',
    date: 'Wednesday, Oct 18, 2023',
    time: '3:00 PM - 5:00 PM',
    instructor: 'Mohamed Ibrahim',
    level: 'Advanced',
    location: 'Lab 2A',
    description: 'Solving complex DP problems and learning optimization techniques.'
  }, {
    id: 3,
    title: 'Graph Algorithms Session',
    date: 'Friday, Oct 20, 2023',
    time: '2:00 PM - 4:00 PM',
    instructor: 'Sarah Ahmed',
    level: 'Intermediate',
    location: 'Lab 3A',
    description: 'Covering shortest paths, MST, and network flow algorithms.'
  }];
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            Training Schedule
          </h1>
          <p className="text-gray-600">
            Join our regular training sessions to improve your competitive
            programming skills
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {trainingSessions.map(session => <div key={session.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-duration-150">
              <div className="p-6">
                <h3 className="text-xl font-medium text-blue-800 mb-2">
                  {session.title}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-600">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpenIcon className="h-4 w-4 mr-2" />
                    <span>{session.location}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-block px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded">
                    {session.level}
                  </span>
                </div>
                <p className="mt-4 text-gray-600 text-sm">
                  {session.description}
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  Instructor:{' '}
                  <span className="text-blue-800">{session.instructor}</span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Register for Session
                </button>
              </div>
            </div>)}
        </div>
      </main>
      <Footer />
    </div>;
}