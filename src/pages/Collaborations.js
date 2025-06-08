import React, { useEffect } from 'react';
import anime from 'animejs';
import MagnetLines from '../components/MagnetLines';
import gfgLogo from '../assets/gfg_logo.png';

const Collaborations = () => {
  useEffect(() => {
    anime({
      targets: '.animate-collab',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 800,
      easing: 'easeInOutQuad',
    });
  }, []);

  return (
    <div className="relative min-h-screen p-8 flex flex-col items-center">
      <MagnetLines />
      <h1 className="animate-collab text-3xl font-bold mb-8 z-10">Our Collaborations</h1>
      <div className="animate-collab max-w-2xl text-center z-10">
        <img src={gfgLogo} alt="Geeks for Geeks Logo" className="w-32 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Geeks for Geeks (GFG)</h2>
        <p className="mb-4">
          <strong>GFG</strong> is an E-Learning Provider platform with around 2 million followers on LinkedIn and an active website and Instagram page. It provides on-campus trainings, Data Structures and Algorithms courses, ML/Data Science courses, Interview Preparation, Competitive Programming, Placement Training, and Online Training to interested students, ensuring both quality and quantity of content.
        </p>
        <p className="mb-4">
          The <strong>Academics and Career Council</strong> is a students' body on campus that provides an extraordinary boost in career aspects. It helps students gain valuable insights into a range of career paths and assists them in identifying their interests through workshops, events like Career Connect, and a series of blog channels for career guidance and skill development. The Council offers Data Structures and Algorithms courses, mock tests, and interviews to students preparing for internship season and to interested students of other batches every year.
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">Objectives of the Collaboration</h3>
        <p className="mb-2">
          The objective of this collaboration is to facilitate a framework of cooperation to conduct 5 specialized self-paced courses:
        </p>
        <ul className="list-disc pl-6 text-left mb-4">
          <li>Data Structures & Algorithms</li>
          <li>Competitive Programming</li>
          <li>Mastering Data Analytics – Python, SQL, Excel, Tableau</li>
          <li>Complete Machine Learning & Data Science Program</li>
          <li>Generative AI</li>
        </ul>
      </div>
    </div>
  );
};

export default Collaborations;
