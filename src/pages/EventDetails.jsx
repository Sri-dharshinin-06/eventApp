import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockEvents } from '../data';
import Button from '../components/Button';
import { Calendar, MapPin, Users, Tag, ArrowLeft } from 'lucide-react';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = mockEvents.find(e => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="main-content container text-center pt-5">
        <h2>Event not found</h2>
        <Button className="mt-1" onClick={() => navigate('/events')}>Back to Events</Button>
      </div>
    );
  }

  return (
    <div className="main-content container">
      <Link to="/events" className="text-primary flex items-center gap-1 mb-1" style={{ width: 'fit-content' }}>
        <ArrowLeft size={20} /> Back to Events
      </Link>
      
      <div className="glass-panel animate-fade-in" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ height: '400px', width: '100%', position: 'relative' }}>
          <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, 
            background: 'linear-gradient(to top, var(--bg-color), transparent)',
            height: '50%'
          }} />
        </div>
        
        <div style={{ padding: '2rem' }}>
          <div className="flex justify-between items-center mb-1">
            <h1 className="gradient-text" style={{ marginBottom: 0 }}>{event.title}</h1>
            <div className="text-accent" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              {event.price}
            </div>
          </div>
          
          <div className="flex gap-2 mb-2" style={{ flexWrap: 'wrap' }}>
            <div className="flex items-center gap-1 text-secondary">
              <Calendar className="text-primary" />
              <span>{new Date(event.date).toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1 text-secondary">
              <MapPin className="text-primary" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-1 text-secondary">
              <Users className="text-primary" />
              <span>{event.attendees} Attending</span>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
            <h3>About This Event</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{event.description}</p>
            
            <Button variant="primary" size="large" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }} onClick={() => alert('Booking flow would start here!')}>
              <Tag size={20} /> Book Tickets Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
