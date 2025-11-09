import React from 'react';
import { Navbar } from './Navbar';
import { ContestTable } from './ContestTable';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { AnnouncementCard } from './AnnouncementCard';
export function HomePage() {
  const upcomingTrainings = [{
    id: 1,
    name: 'Advanced Dynamic Programming Workshop',
    type: 'Training',
    date: 'Oct 15, 2023 14:00',
    duration: '2:00',
    registration: 'Register now'
  }, {
    id: 2,
    name: 'Graph Algorithms Practice Session',
    type: 'Practice',
    date: 'Oct 17, 2023 16:00',
    duration: '3:00',
    registration: 'Register now'
  }, {
    id: 3,
    name: 'Mock ICPC Contest',
    type: 'Contest',
    date: 'Oct 20, 2023 13:00',
    duration: '5:00',
    registration: 'Register now'
  }];
  const recentActivities = [{
    id: 4,
    name: 'Number Theory Workshop',
    type: 'Training',
    date: 'Oct 8, 2023',
    writer: 'By Dr. Ahmed Hassan',
    solved: '25 participants'
  }, {
    id: 5,
    name: 'Weekly Practice Contest',
    type: 'Contest',
    date: 'Oct 5, 2023',
    writer: 'Prepared by Senior Members',
    solved: '32 participants'
  }];
  const announcements = [{
    id: 1,
    title: 'ICPC Regional Contest Registration Open',
    author: 'Club Admin',
    date: 'Oct 10, 2023',
    content: 'Registration for the ICPC Regional Contest is now open! All interested teams should register through the official ICPC website and inform the club administration. Training sessions for registered teams will start next week.'
  }, {
    id: 2,
    title: 'New Training Schedule Announcement',
    author: 'Training Coordinator',
    date: 'Oct 13, 2023',
    content: 'We are excited to announce our new training schedule for this semester. Sessions will be held every Tuesday and Thursday from 2:00 PM to 4:00 PM. The schedule includes both theoretical lectures and practice sessions.'
  }];
  return <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <main className="flex-1">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-800 pb-2">
                Club Announcements
              </h2>
              <div className="space-y-4">
                {announcements.map(announcement => <AnnouncementCard key={announcement.id} announcement={announcement} />)}
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-800 pb-2">
                Upcoming Training Sessions
              </h2>
              <ContestTable contests={upcomingTrainings} type="upcoming" />
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4 border-b-2 border-blue-800 pb-2">
                Recent Activities
              </h2>
              <ContestTable contests={recentActivities} type="recent" />
            </section>
          </main>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>;
}