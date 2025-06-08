import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sessions from './pages/Sessions';
import Collaborations from './pages/Collaborations';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/collaborations" element={<Collaborations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;