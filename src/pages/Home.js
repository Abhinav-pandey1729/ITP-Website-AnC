import React, { useEffect } from 'react';
import anime from 'animejs';
import MagnetLines from '../components/MagnetLines';
import ShinyText from '../components/ShinyText';
import DecryptedText from '../components/DecryptedText';

const Home = () => {
  useEffect(() => {
    anime({
      targets: '.animate-text',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 800,
      easing: 'easeInOutQuad',
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      <MagnetLines />
      <div className="container mx-auto pt-8 px-4 pb-16 animate-text">
        <h1 className="text-4xl font-bold mb-6 text-center">
          <ShinyText text="Internship Training Program (ITP)" />
        </h1>
        <h2 className="mb-4">
          <ShinyText text="Program Overview" />
        </h2>
        <p>
          <DecryptedText
            text="The Internship Training Program (ITP) is a flagship initiative by the Academics and Career Council (AnC) at IIT Kanpur, designed to equip students with the skills and knowledge needed for successful internships. ITP offers a structured series of workshops, mentorship sessions, and practical resources covering every stage of the internship process."
            animateOn="view"
          />
        </p>
        <h2 className="mt-6 mb-4">
          <ShinyText text="Key Features" />
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <DecryptedText
              text="Intern Buddy Program: Junior students are paired with seniors who have secured internships in similar roles, providing personalized mentorship and guidance."
              animateOn="view"
            />
          </li>
          <li>
            <DecryptedText
              text="HR & Technical Workshops: Interactive sessions on resume building, interview techniques, and group discussions, simulating real internship selection processes."
              animateOn="view"
            />
          </li>
          <li>
            <DecryptedText
              text="Mock Interviews: Practice interviews with feedback from seniors and industry professionals."
              animateOn="view"
            />
          </li>
          <li>
            <DecryptedText
              text="Resource Repository: Access to curated materials, sample resumes, and preparation guides."
              animateOn="view"
            />
          </li>
          <li>
            <DecryptedText
              text="Collaborative Courses: Partnerships with industry leaders for specialized training in data structures, algorithms, and more."
              animateOn="view"
            />
          </li>
        </ul>
        <h2 className="mt-6 mb-4">
          <ShinyText text="Impact" />
        </h2>
        <p>
          <DecryptedText
            text="ITP bridges the gap between academic coursework and real-world internship requirements, empowering students to confidently approach the internship season with up-to-date skills, practical insights, and a strong support network."
            animateOn="view"
          />
        </p>
      </div>
    </div>
  );
};

export default Home;
