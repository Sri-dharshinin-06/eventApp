import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import { mockEvents } from '../data';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = mockEvents.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-content container">
      <div className="mb-2 text-center animate-fade-in">
        <h1 className="gradient-text">All Events</h1>
        <p>Browse through our extensive catalog of premium events.</p>
        
        <input 
          type="text" 
          placeholder="Search events by title or location..." 
          className="search-input mt-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div key={event.id} className="animate-fade-in">
              <EventCard {...event} />
            </div>
          ))
        ) : (
          <div className="glass-panel text-center" style={{ gridColumn: '1 / -1' }}>
            <h3>No events found</h3>
            <p>Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
      
      {/* Search Input Styles embedded for simplicity, ideally in index.css */}
      <style>{`
        .search-input {
          width: 100%;
          max-width: 500px;
          padding: 1rem 1.5rem;
          border-radius: 2rem;
          border: 1px solid var(--border-color);
          background: rgba(30, 41, 59, 0.4);
          color: white;
          font-family: inherit;
          font-size: 1rem;
          backdrop-filter: blur(8px);
        }
        .search-input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: var(--shadow-glow);
        }
      `}</style>
    </div>
  );
};

export default Events;
