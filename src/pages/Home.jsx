import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import Button from '../components/Button';
import { mockEvents } from '../data';

const Home = () => {
  const upcomingEvents = mockEvents.slice(0, 3);

  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className="container mt-2 mb-2">
        <div className="glass-panel text-center animate-fade-in" style={{ padding: '4rem 2rem', border: '1px solid var(--primary-color)' }}>
          <h1 className="gradient-text">Discover & Host Amazing Events</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.2rem' }}>
            EventHub is your premium platform for discovering local experiences and managing your own events with ease.
          </p>
          <div className="flex justify-center gap-1">
            <Link to="/events">
              <Button variant="primary">Explore Events</Button>
            </Link>
            <Link to="/create">
              <Button variant="outline">Create Event</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="container mb-2">
        <div className="flex items-center justify-between mb-1">
          <h2>Upcoming Highlights</h2>
          <Link to="/events" className="text-primary">View all events &rarr;</Link>
        </div>
        <div className="grid">
          {upcomingEvents.map((event, index) => (
            <div key={event.id} className={`delay-${(index + 1) * 100}`}>
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
