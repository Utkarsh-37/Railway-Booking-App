import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [user] = useState({ name: 'Utkarsh Pathak', initials: 'UP', notifications: 3 });

  return (
    <nav className="navbar professional-navbar">
      <div className="nav-group-left">
        <div className="nav-brand">
          <span className="icon">🚆</span>
          <div className="brand-text">
            <span className="brand-name">RAILWAY</span>
            <span className="brand-slogan">BOOK YOUR JOURNEY</span>
          </div>
        </div>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="#bookings">My Bookings</Link>
          <Link to="#pnr">PNR Status</Link>
          <Link to="#help">Help</Link>
        </div>
      </div>

      <div className="nav-group-right">
        <button className="icon-btn">
          <span>⚙️</span>
        </button>
        <button className="icon-btn has-badge">
          <span>🔔</span>
          {user.notifications > 0 && <span className="notification-badge">{user.notifications}</span>}
        </button>
        <div className="user-profile">
          <div className="user-avatar">{user.initials}</div>
          <span className="user-name">{user.name}</span>
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;