import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { HomePage } from './components/HomePage';
import { TrainingPage } from './pages/TrainingPage';
import { TeamsPage } from './pages/TeamsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';
import { ContestDetails } from './pages/ContestDetails';
import { ContestsPage } from './pages/ContestsPage';
import { ProblemPage } from './pages/ProblemPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { ContestStandings } from './pages/ContestStandings';
import { ContestEditorial } from './pages/ContestEditorial';
import { ProblemsetPage } from './pages/ProblemsetPage';
import { CreateContestPage } from './pages/CreateContestPage';
import { CreateProblemPage } from './pages/CreateProblemPage';
export function App() {
  return <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contests" element={<ContestsPage />} />
          <Route path="/contests/:id" element={<ContestDetails />} />
          <Route path="/contests/:id/standings" element={<ContestStandings />} />
          <Route path="/contests/:id/editorial" element={<ContestEditorial />} />
          <Route path="/problems" element={<ProblemsetPage />} />
          <Route path="/problems/:id" element={<ProblemPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/user/:username" element={<UserProfilePage />} />
          <Route path="/contests/create" element={<CreateContestPage />} />
          <Route path="/problems/create" element={<CreateProblemPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>;
}