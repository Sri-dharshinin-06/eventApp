import React from 'react';
import { Target, Shield, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="main-content container text-center">
      <div className="animate-fade-in mb-2" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
        <h1 className="gradient-text">About EventHub</h1>
        <p style={{ fontSize: '1.2rem' }}>
          EventHub was founded with a single mission: to make discovering, booking, and hosting events an effortless and premium experience. 
          We believe that bringing people together should be seamless and beautiful.
        </p>
      </div>

      <div className="grid">
        <div className="glass-panel animate-fade-in delay-100">
          <Target size={40} className="text-primary mb-1" />
          <h3>Our Mission</h3>
          <p>To connect creators with audiences through a dynamic, easy-to-use platform that empowers everyone to host unforgettable experiences.</p>
        </div>
        
        <div className="glass-panel animate-fade-in delay-200">
          <Shield size={40} className="text-primary mb-1" />
          <h3>Secure & Reliable</h3>
          <p>We prioritize your data and payment security above all else. Our infrastructure is built to scale and handle events of any size without a hitch.</p>
        </div>
        
        <div className="glass-panel animate-fade-in delay-300">
          <Zap size={40} className="text-primary mb-1" />
          <h3>Lightning Fast</h3>
          <p>Built with modern web technologies to ensure that finding your next weekend plan is as quick as clicking a button.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
