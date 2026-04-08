import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { popularRoutes } from '../data/mockData';

const Home = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    from: 'New Delhi (NDLS)',
    to: 'Mumbai (BCT)',
    date: '2024-05-25',
    trainClass: 'All Classes'
  });

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/trains');
  };

  return (
    <div className="page-container home-layout">
      <div className="hero-section">
        <h1>Book Your Journey</h1>
        <p>Experience the most comfortable train rides across the country.</p>
        <div className="hero-image">
          <img
            src="https://wallpaperaccess.com/full/3951281.jpg"
            alt="High Speed Train"
            className="hero-img"
          />
        </div>
      </div>

      <div className="search-section">
        <div className="card search-card">
          <h2>Find Trains</h2>
          <form onSubmit={handleSearch}>
            <div className="input-group">
              <label>From</label>
              <input type="text" value={searchData.from} readOnly />
            </div>
            <div className="swap-icon">⇅</div>
            <div className="input-group">
              <label>To</label>
              <input type="text" value={searchData.to} readOnly />
            </div>
            
            <div className="form-row">
              <div className="input-group half">
                <label>Journey Date</label>
                <input type="date" value={searchData.date} onChange={(e) => setSearchData({...searchData, date: e.target.value})} />
              </div>
              <div className="input-group half">
                <label>Class</label>
                <select value={searchData.trainClass} onChange={(e) => setSearchData({...searchData, trainClass: e.target.value})}>
                  <option>All Classes</option>
                  <option>1A</option>
                  <option>2A</option>
                  <option>3A</option>
                  <option>SL</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-primary full-width">Search Trains</button>
          </form>
        </div>

        <div className="popular-routes">
          <h3>Popular Routes</h3>
          <div className="chips-container">
            {popularRoutes.map((route, i) => (
              <span key={i} className="chip">{route}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;