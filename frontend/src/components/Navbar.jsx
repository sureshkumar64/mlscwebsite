import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // for hamburger icon
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="bg-[#0d1321] text-white shadow-md rounded-b-md">
      <div className="flex items-center justify-between px-6 py-3">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleLogoClick}
        >
          <img src={logo} alt="WCE-MLSC Logo" className="w-20 h-20 object-contain" />
          <span className="text-xl md:text-2xl font-bold">
            WCE <span className="text-blue-400">- MLSC</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-2xl font-semibold pr-4">
          <Link to="/events" className="hover:text-blue-400 transition">
            Events
          </Link>
          <Link to="/sponsor" className="hover:text-blue-400 transition">
            Sponsors
          </Link>
          <Link to="/podcasts" className="hover:text-blue-400 transition">
            Podcasts
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 px-6 pb-4 text-lg font-medium bg-[#0d1321] border-t border-gray-700">
          <Link
            to="/events"
            className="hover:text-blue-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/sponsor"
            className="hover:text-blue-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Sponsors
          </Link>
          <Link
            to="/podcasts"
            className="hover:text-blue-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Podcasts
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
