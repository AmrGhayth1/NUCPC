import React from 'react';
import { MessageCircleIcon, ThumbsUpIcon } from 'lucide-react';
export function AnnouncementCard({
  announcement
}) {
  return <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-medium text-blue-800 mb-1">
        <a href="#" className="hover:underline">
          {announcement.title}
        </a>
      </h3>
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <span>
          By{' '}
          <a href="#" className="text-blue-800 hover:underline">
            {announcement.author}
          </a>
        </span>
        <span className="mx-2">•</span>
        <span>{announcement.date}</span>
      </div>
      <p className="text-gray-700 mb-3">{announcement.content}</p>
      <div className="flex items-center text-sm text-gray-500">
        <a href="#" className="flex items-center hover:text-blue-800 mr-4">
          <ThumbsUpIcon className="h-4 w-4 mr-1" />
          <span>Like</span>
        </a>
        <a href="#" className="flex items-center hover:text-blue-800">
          <MessageCircleIcon className="h-4 w-4 mr-1" />
          <span>Comment</span>
        </a>
      </div>
    </div>;
}