import React, { useState } from 'react';
import './Sidebar.css';
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="sidebar-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <div className={`round-button ${isHovered ? 'hidden' : ''}`}>
          <FaBars style={{ fontSize: '22px', color: '#fff' }} />
        </div>
      )}
      {isHovered && (
        <div className="sidebar-content">
          <p><strong>MENU</strong> Page</p>
          <hr />
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
