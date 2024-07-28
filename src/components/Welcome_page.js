import React, { useState, useEffect } from 'react';
import './Welcome.css';

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 1) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`welcome-container ${isVisible ? 'visible' : 'hidden'}`}>
      <h1>WELCOME</h1>
    </div>
  );
};

export default Welcome;
