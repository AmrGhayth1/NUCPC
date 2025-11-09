import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookOpenIcon, PlayIcon, AwardIcon, BookmarkIcon } from 'lucide-react';
export function EduPage() {
  const courses = [{
    id: 1,
    title: 'ITMO Academy: pilot course',
    description: 'A two-part pilot course, which will teach you the basics of competitive programming.',
    lessons: 12,
    difficulty: 'Beginner'
  }, {
    id: 2,
    title: 'Dynamic Programming',
    description: 'Master the art of solving complex problems using dynamic programming techniques.',
    lessons: 15,
    difficulty: 'Intermediate'
  }, {
    id: 3,
    title: 'Graph Algorithms',
    description: 'Learn essential graph algorithms and their applications in competitive programming.',
    lessons: 10,
    difficulty: 'Advanced'
  }];
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            Codeforces EDU
          </h1>
          <p className="text-gray-600">
            Interactive courses and practice problems to master competitive
            programming
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={<BookOpenIcon className="h-6 w-6" />} title="Courses" value="15+" description="Educational courses" />
          <StatCard icon={<PlayIcon className="h-6 w-6" />} title="Lessons" value="200+" description="Interactive lessons" />
          <StatCard icon={<AwardIcon className="h-6 w-6" />} title="Problems" value="1000+" description="Practice problems" />
          <StatCard icon={<BookmarkIcon className="h-6 w-6" />} title="Topics" value="50+" description="Different topics" />
        </div>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Available Courses
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map(course => <div key={course.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-medium text-blue-800 mb-2">
                  <a href="#" className="hover:underline">
                    {course.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{course.lessons} lessons</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                    {course.difficulty}
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Start Course
                </button>
              </div>
            </div>)}
        </div>
      </main>
      <Footer />
    </div>;
}
function StatCard({
  icon,
  title,
  value,
  description
}) {
  return <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="font-medium text-gray-800">{title}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>;
}