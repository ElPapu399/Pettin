import './index.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

import Home from "./pages/Home";
import Explore from './pages/Explore';
import Match from './pages/Match'
import Messages from './pages/Messages'
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/messages" element={<Messages/>} />
          <Route path="/matches" element={<Match/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
