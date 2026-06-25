import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users } from 'lucide-react';
import Button from './Button';
import './EventCard.css';

const EventCard = ({ id, title, date, location, image, attendees }) => {
  return (
    <div className="event-card glass-panel animate-fade-in">
      <div className="event-image-container">
        <img src={image} alt={title} className="event-image" />
        <div className="event-date-badge">
          {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </div>
      </div>
      <div className="event-content">
        <h3 className="event-title">{title}</h3>
        <div className="event-details">
          <div className="detail-item">
            <Calendar size={16} />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          <div className="detail-item">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
          <div className="detail-item">
            <Users size={16} />
            <span>{attendees} attendees</span>
          </div>
        </div>
        <Link to={`/events/${id}`}>
          <Button variant="primary" className="full-width mt-1">View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
