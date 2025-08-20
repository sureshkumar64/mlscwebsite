import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Podcasts from './pages/Podcasts';
import Sponsor from './pages/Sponsor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventDetail from './pages/EventDetail';

export default function App() {


  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/sponsor" element={<Sponsor />} />
           <Route path="/event/:eventId" element={<EventDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
