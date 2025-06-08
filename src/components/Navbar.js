import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ancLogo from '../assets/anc_logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-secondary p-4 flex items-center sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <img src={ancLogo} alt="ANC Logo" className="h-10 w-auto" />
        <span className="text-lg font-bold">Academics and Career Council</span>
      </div>
      <div className="flex-grow flex justify-center">
        <span className="text-xl font-bold">Internship Training Program (ITP)</span>
      </div>
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-accent">Home</Link>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="hover:text-accent"
          >
            Resources
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
              <a
                href="https://drive.google.com/drive/folders/1zJBCoNXUq-21GLSjNtL3WYQohwTK-M6W"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Sessions
              </a>
              <a
                href="https://drive.google.com/drive/folders/1mrAamEIaywvB2Y4L4f1-PugDWsaKa5WM"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Role-Based Resources
              </a>
              <a
                href="https://drive.google.com/drive/folders/15RfYWH4yNCOtThR5nuaCxx9lEC2M0YSx"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Resumes
              </a>
            </div>
          )}
        </div>
        <Link to="/collaborations" className="hover:text-accent">Collaborations</Link>
        <Link to="/contact" className="hover:text-accent">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
