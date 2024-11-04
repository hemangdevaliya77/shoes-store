import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    
  };
  return (
    <>
    
    <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'} Menu
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className='shoes-types'>
        <li><Link to="/lifestyle">LifeStyle</Link></li>
        <li><Link to="/jordan">Jordan</Link></li>
        <li><Link to="/running">Running</Link></li>
        <li><Link to="/basketball">Basketball</Link></li>
        <li><Link to="/training">Training & Gym</Link></li>
      </ul>
    </div>
    </>
    
  );
}

export default SideBar;
