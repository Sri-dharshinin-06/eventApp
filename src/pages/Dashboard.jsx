import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { mockEvents } from '../data';
import { User, Settings, LogOut } from 'lucide-react';
import Button from '../components/Button';

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock data for registered/hosted events
  const registeredEvents = mockEvents.slice(0, 2);
  const hostedEvents = mockEvents.slice(2, 3);

  return (
    <div className="main-content container">
      <div className="flex justify-between items-center mb-2 animate-fade-in" style={{ flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="gradient-text mb-1">My Dashboard</h1>
          <p>Welcome back, Alex! Here is an overview of your events.</p>
        </div>
        <div className="flex gap-1">
          <Button variant="outline"><Settings size={18} /> Settings</Button>
          <Button variant="outline" onClick={() => navigate('/')}><LogOut size={18} /> Logout</Button>
        </div>
      </div>

      <div className="grid mb-2">
        <div className="glass-panel animate-fade-in delay-100 flex items-center gap-1">
          <div style={{ background: 'var(--primary-color)', padding: '1rem', borderRadius: '50%' }}>
            <User size={32} color="white" />
          </div>
          <div>
            <h3>Alex Johnson</h3>
            <p>alex.johnson@example.com</p>
          </div>
        </div>
        <div className="glass-panel animate-fade-in delay-200">
          <h3>Registered Events</h3>
          <h1 className="text-primary" style={{ fontSize: '3rem', margin: 0 }}>{registeredEvents.length}</h1>
        </div>
        <div className="glass-panel animate-fade-in delay-300">
          <h3>Hosted Events</h3>
          <h1 className="text-accent" style={{ fontSize: '3rem', margin: 0 }}>{hostedEvents.length}</h1>
        </div>
      </div>

      <h2 className="mb-1">My Registered Events</h2>
      <div className="grid mb-2">
        {registeredEvents.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>

      <h2 className="mb-1">Events I'm Hosting</h2>
      <div className="grid mb-2">
        {hostedEvents.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
