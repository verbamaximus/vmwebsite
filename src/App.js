import { useState, useEffect } from 'react';
import './App.css';
import tachyons from 'tachyons';

import Particles from 'react-tsparticles';
import particlesConfig from './Config/particlesConfig';

import Home from './Pages/Home';
import Events from './Pages/Events';
import Team from './Pages/Team';
import Sponsors from './Pages/Schedule';
import Contact from './Pages/Contact';

import { HashRouter as Router, Route, Link, Redirect, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="particles">
            <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div>
        <Router>
          {/*All our Routes goes here!*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Schedule" element={<Schedule />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
