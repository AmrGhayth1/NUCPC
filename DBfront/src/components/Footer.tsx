import React from 'react';
import { Link } from 'react-router-dom';
export function Footer() {
  return <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-3">NU ICPC Club</h4>
            <p className="text-sm text-blue-200">
              The competitive programming club at Nile University, dedicated to
              developing problem-solving skills and preparing teams for ICPC
              competitions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-blue-200 hover:text-white">
                  Training Schedule
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-blue-200 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-blue-200 hover:text-white">
                  Our Teams
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-blue-200">
              <p>Nile University</p>
              <p>Sheikh Zayed, Giza, Egypt</p>
              <p>Email: icpc@nu.edu.eg</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-blue-500 text-center text-sm text-blue-200">
          © 2023 Nile University ICPC Club. All rights reserved.
        </div>
      </div>
    </footer>;
}