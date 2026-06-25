import React, { useState } from 'react';
import Button from '../components/Button';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent to our support team.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="main-content container flex justify-center items-center" style={{ minHeight: 'calc(100vh - 70px)' }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="text-center mb-2">
          <h1 className="gradient-text">Contact Us</h1>
          <p>Have a question or need support? Reach out to us.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input required type="text" id="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="John Doe" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input required type="email" id="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="john@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea required id="message" rows="5" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="How can we help you?" />
          </div>

          <Button type="submit" variant="primary" className="full-width mt-1">
            <Send size={18} /> Send Message
          </Button>
        </form>

        <style>{`
          .form-group { display: flex; flexDirection: column; gap: 0.5rem; }
          .form-group label { font-weight: 500; color: var(--text-primary); }
          .form-group input, .form-group textarea {
            padding: 0.75rem 1rem; border-radius: 0.5rem; border: 1px solid var(--border-color);
            background: rgba(15, 23, 42, 0.6); color: white; font-family: inherit;
          }
          .form-group input:focus, .form-group textarea:focus {
            outline: none; border-color: var(--primary-color); box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
          }
        `}</style>
      </div>
    </div>
  );
};

export default Contact;
