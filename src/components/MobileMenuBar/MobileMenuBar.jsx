import React, { useState } from 'react';
import './MobileMenuBar.css'; // Import your CSS file with animations

const MobileMenuBar = ({toggleMenu, isOpen}) => {
  

  return (
    <div className={`container ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default MobileMenuBar;
