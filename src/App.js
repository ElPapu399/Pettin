import './index.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from "./pages/Home";
import Explore from './pages/Explore';
import Match from './pages/Match'
import Messages from './pages/Messages'
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar/>
        
        <main className="flex-1">
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/matches" element={<Match/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/notifications" element={<Notifications/>} />
          </Routes>
        </main>


        <Footer/>
      </div>
    </Router>
  );
}

export default App;
