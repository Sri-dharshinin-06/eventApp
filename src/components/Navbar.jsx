import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CalendarDays, User } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container flex items-center justify-between" style={{ width: '100%' }}>
        <NavLink to="/" className="nav-logo gradient-text text-primary">
          <CalendarDays size={28} />
          <span>EventHub</span>
        </NavLink>
        <div className="nav-links flex items-center gap-2">
          <div className="flex gap-2">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
            <NavLink to="/events" className={({ isActive }) => isActive ? "active" : ""}>Events</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          </div>
          
          <div className="flex gap-1 items-center ml-2" style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '1rem' }}>
            <NavLink to="/dashboard" className="text-secondary hover:text-primary">
              <User size={20} />
            </NavLink>
            <Link to="/login">
              <Button variant="outline" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>Sign In</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
