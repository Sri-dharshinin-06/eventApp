import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="main-content container flex justify-center items-center" style={{ minHeight: 'calc(100vh - 70px)' }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="text-center mb-2">
          <h1 className="gradient-text">Welcome Back</h1>
          <p>Login to your EventHub account</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input required type="email" id="email" placeholder="you@example.com" />
          </div>
          
          <div className="form-group">
            <div className="flex justify-between items-center">
              <label htmlFor="password">Password</label>
              <a href="#" className="text-primary" style={{ fontSize: '0.85rem' }}>Forgot password?</a>
            </div>
            <input required type="password" id="password" placeholder="••••••••" />
          </div>

          <Button type="submit" variant="primary" className="full-width mt-1">
            Sign In
          </Button>
        </form>

        <div className="text-center mt-2" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Don't have an account? <Link to="/signup" className="text-primary">Sign up</Link>
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

export default Login;
