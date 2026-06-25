import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="main-content container flex justify-center items-center" style={{ minHeight: 'calc(100vh - 70px)' }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="text-center mb-2">
          <h1 className="gradient-text">Join EventHub</h1>
          <p>Create an account to host or book events</p>
        </div>

        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input required type="text" id="name" placeholder="John Doe" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input required type="email" id="email" placeholder="you@example.com" />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input required type="password" id="password" placeholder="••••••••" />
          </div>

          <Button type="submit" variant="primary" className="full-width mt-1">
            Create Account
          </Button>
        </form>

        <div className="text-center mt-2" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Already have an account? <Link to="/login" className="text-primary">Log in</Link>
        </div>

        <style>{`
          .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
          .form-group label { font-weight: 500; color: var(--text-primary); }
          .form-group input {
            padding: 0.75rem 1rem; border-radius: 0.5rem; border: 1px solid var(--border-color);
            background: rgba(15, 23, 42, 0.6); color: white; font-family: inherit;
          }
          .form-group input:focus {
            outline: none; border-color: var(--primary-color); box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
          }
        `}</style>
      </div>
    </div>
  );
};

export default Signup;
