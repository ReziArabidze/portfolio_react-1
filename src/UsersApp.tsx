import React from 'react';
import { personalInfo } from './data/portfolioData';
import { Navbar } from './components/sections/Navbar';
import { Footer } from './components/sections/Footer';
import { UsersPage } from './pages/UsersPage';
import './App.css';

export const UsersApp: React.FC = () => {
  return (
    <div className="portfolio-app">
      <Navbar name={personalInfo.name} currentPage="users" />
      <main className="main-content">
        <UsersPage />
      </main>
      <Footer personalInfo={personalInfo} />
    </div>
  );
};

