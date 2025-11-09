import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Users2Icon, TrophyIcon, CalendarIcon, TargetIcon } from 'lucide-react';
export function AboutPage() {
  const achievements = ['ICPC Regional Finalists 2023', 'ECPC 2nd Place 2022', 'Google Hash Code Top 100 Teams 2023', 'Multiple teams qualified for ACPC 2023'];
  const teamMembers = [{
    role: 'Club President',
    name: 'Dr. Ahmed Hassan',
    title: 'Associate Professor, Computer Science'
  }, {
    role: 'Technical Lead',
    name: 'Mohamed Ibrahim',
    title: 'Senior Competitive Programmer'
  }, {
    role: 'Training Coordinator',
    name: 'Sarah Ahmed',
    title: 'ICPC Regional Finalist'
  }];
  return <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">
              About NU ICPC Club
            </h1>
            <p className="text-gray-600 text-lg">
              Empowering students to excel in competitive programming and
              problem-solving
            </p>
          </div>
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              <TargetIcon className="h-6 w-6 mr-2" />
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The ICPC Club at Nile University is dedicated to fostering a
              community of competitive programmers and problem solvers. We aim
              to prepare students for international programming competitions
              while developing crucial algorithmic thinking and coding skills
              that are valuable in both academic and professional settings.
            </p>
          </section>
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              <TrophyIcon className="h-6 w-6 mr-2" />
              Achievements
            </h2>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => <li key={index} className="flex items-center text-gray-600">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  {achievement}
                </li>)}
            </ul>
          </section>
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              <Users2Icon className="h-6 w-6 mr-2" />
              Club Leadership
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {teamMembers.map((member, index) => <div key={index} className="text-center">
                  <div className="font-medium text-gray-800 mb-1">
                    {member.role}
                  </div>
                  <div className="text-blue-800 font-bold mb-1">
                    {member.name}
                  </div>
                  <div className="text-sm text-gray-600">{member.title}</div>
                </div>)}
            </div>
          </section>
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              <CalendarIcon className="h-6 w-6 mr-2" />
              Join Us
            </h2>
            <p className="text-gray-600 mb-6">
              We welcome students of all skill levels who are interested in
              competitive programming. Regular training sessions are held
              throughout the academic year, and we provide mentorship to help
              you improve your problem-solving abilities.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Join the Club
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </div>;
}