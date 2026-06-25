import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { PlusCircle } from 'lucide-react';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    image: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert(`Event "${formData.title}" created successfully!`);
    navigate('/events');
  };

  return (
    <div className="main-content container flex justify-center items-center" style={{ minHeight: 'calc(100vh - 70px)' }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '600px', margin: '2rem 0' }}>
        <div className="text-center mb-2">
          <h1 className="gradient-text">Create New Event</h1>
          <p>Fill out the details below to publish your event.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="form-group">
            <label htmlFor="title">Event Title</label>
            <input required type="text" id="title" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. Summer Tech Meetup" />
          </div>

          <div className="flex gap-1" style={{ flexWrap: 'wrap' }}>
            <div className="form-group" style={{ flex: '1 1 200px' }}>
              <label htmlFor="date">Date & Time</label>
              <input required type="datetime-local" id="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
            <div className="form-group" style={{ flex: '1 1 200px' }}>
              <label htmlFor="price">Price</label>
              <input required type="text" id="price" name="price" value={formData.price} onChange={handleChange} placeholder="e.g. Free or ₹50" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input required type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Venue address or Online link" />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input required type="url" id="image" name="image" value={formData.image} onChange={handleChange} placeholder="https://example.com/image.jpg" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea required id="description" name="description" rows="4" value={formData.description} onChange={handleChange} placeholder="What is this event about?" />
          </div>

          <Button type="submit" variant="primary" className="full-width mt-1">
            <PlusCircle size={20} /> Publish Event
          </Button>
        </form>

        {/* Form Styles */}
        <style>{`
          .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .form-group label {
            font-weight: 500;
            color: var(--text-primary);
          }
          .form-group input, .form-group textarea {
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid var(--border-color);
            background: rgba(15, 23, 42, 0.6);
            color: white;
            font-family: inherit;
          }
          .form-group input:focus, .form-group textarea:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
          }
        `}</style>
      </div>
    </div>
  );
};

export default CreateEvent;
