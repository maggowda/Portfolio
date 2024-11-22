import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Engineer from './pages/engineer';
import Projects from './pages/projects';
import Navbar from './components/navbar';
import Footer from './components/footer';

const classes = {
  container: 'flex flex-col justify-between items-center bg-black text-white',
};

function App() {
  return (
      <div className={classes.container}>
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/engineer" element={<Engineer />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
        </Router>
      </div>
  );
}

export default App;