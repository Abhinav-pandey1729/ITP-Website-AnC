import React, { useEffect } from 'react';
import anime from 'animejs'; // Updated import
import MagnetLines from '../components/MagnetLines';

const sessions = [
  { name: 'Session 1: Introduction', link: 'https://drive.google.com/file/d/EXAMPLE_FILE_ID_1/view' },
  { name: 'Session 2: Data Structures', link: 'https://drive.google.com/file/d/EXAMPLE_FILE_ID_2/view' },
  // Replace with actual session links
];

const resources = [
  { name: 'HR Toughest Questions', link: 'https://www.geeksforgeeks.org/hr-interview-questions/' },
  { name: 'Technical Prep', link: 'https://www.geeksforgeeks.org/technical-interview-preparation/' },
];

const Sessions = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 800,
              easing: 'easeInOutQuad',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-session').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen p-8">
      <MagnetLines />
      <h1 className="text-3xl font-bold mb-8 text-center z-10 relative">ITP Sessions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto z-10 relative">
        <div>
          <h2 className="text-xl font-semibold mb-4">Session Links</h2>
          {sessions.map((session, index) => (
            <div key={index} className="animate-session mb-4 opacity-0">
              <a href={session.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                {session.name}
              </a>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          {resources.map((resource, index) => (
            <div key={index} className="animate-session mb-4 opacity-0">
              <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                {resource.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sessions;