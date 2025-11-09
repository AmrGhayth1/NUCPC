import React from 'react';
import { UserIcon, MenuIcon, SearchIcon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
export function Navbar() {
  const location = useLocation();
  const {
    user,
    logout
  } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <MenuIcon className="h-6 w-6 md:hidden" />
            <Link to="/" className="flex items-center gap-2">
              <img src="/IMG_7416.jpg" alt="NU ICPC Club" className="h-8 w-8 rounded" />
              <span className="font-bold text-xl">NU ICPC Club</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" text="Home" active={location.pathname === '/'} />
            <NavLink to="/contests" text="Contests" active={location.pathname === '/contests'} />
            <NavLink to="/training" text="Training" active={location.pathname === '/training'} />
            <NavLink to="/teams" text="Teams" active={location.pathname === '/teams'} />
            <NavLink to="/resources" text="Resources" active={location.pathname === '/resources'} />
            <NavLink to="/about" text="About" active={location.pathname === '/about'} />
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-blue-200">
              <SearchIcon className="h-5 w-5" />
            </a>
            {user ? <div className="flex items-center space-x-3">
                <Link to="/profile" className="flex items-center space-x-1 bg-blue-700 px-3 py-1 rounded hover:bg-blue-600">
                  <UserIcon className="h-4 w-4" />
                  <span>{user.name}</span>
                </Link>
                <button onClick={handleLogout} className="hidden md:block bg-red-600 px-3 py-1 rounded hover:bg-red-700">
                  Logout
                </button>
              </div> : <div className="flex items-center space-x-3">
                <Link to="/login" className="flex items-center space-x-1 bg-blue-700 px-3 py-1 rounded hover:bg-blue-600">
                  <UserIcon className="h-4 w-4" />
                  <span>Login</span>
                </Link>
                <Link to="/register" className="hidden md:block bg-green-600 px-3 py-1 rounded hover:bg-green-500">
                  Join Club
                </Link>
              </div>}
          </div>
        </div>
      </div>
      <div className="bg-blue-700 py-2">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto md:justify-center space-x-6 text-sm">
            <Link to="/contests" className="whitespace-nowrap hover:text-blue-200">
              Active Contests
            </Link>
            <Link to="/teams" className="whitespace-nowrap hover:text-blue-200">
              Our Teams
            </Link>
            <Link to="/resources" className="whitespace-nowrap hover:text-blue-200">
              Practice
            </Link>
            <Link to="/about" className="whitespace-nowrap hover:text-blue-200">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>;
}
function NavLink({
  to,
  text,
  active = false
}) {
  return <Link to={to} className={`px-3 py-2 rounded-md text-sm font-medium ${active ? 'bg-blue-900' : 'hover:bg-blue-700'}`}>
      {text}
    </Link>;
}