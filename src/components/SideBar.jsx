import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

function SideBar() {
  return (
    <div className='sidebar'>
      <ul className='shoes-types'>
        <li><Link to="/lifestyle">LifeStyle</Link></li>
        <li><Link to="/jordan">Jordan</Link></li>
        <li><Link to="/running">Running</Link></li>
        <li><Link to="/basketball">Basketball</Link></li>
        <li><Link to="/training">Training & Gym</Link></li>
      </ul>
    </div>
  );
}

export default SideBar;
