import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ancLogo from '../assets/anc_logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-secondary p-4 flex items-center justify-between sticky top-0 z-50">
      {/* Left: Logo and council */}
      <div className="flex items-center gap-2">
        <img src={ancLogo} alt="ANC Logo" className="h-14 w-auto" />
        <span className="text-lg font-bold whitespace-nowrap">Academics and Career Council</span>
      </div>
      {/* Center: ITP */}
      <div className="flex-grow flex justify-center">
        <span className="text-xl font-bold whitespace-nowrap">Internship Training Program (ITP)</span>
      </div>
      {/* Right: Nav links */}
      <div className="flex items-center gap-6 relative">
        <Link to="/" className="hover:text-accent">Home</Link>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="hover:text-accent focus:outline-none"
          >
            Resources
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 text-left">
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
