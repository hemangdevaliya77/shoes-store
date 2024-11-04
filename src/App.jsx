import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import LifeStyle from './pages/LifeStyle'; // Example component
import Jordan from './pages/Jordan'; // Example component
import Running from './pages/Running'; // Example component
import Basketball from './pages/Basketball'; // Example component
import Training from './pages/Training'; // Example component
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import './styles/sidebar.css'


function App() {
 
  return (
    <>
 <Navbar/>
 <h1 className='heading' >Shoes Store</h1>

      <div style={{ display: 'flex' }}>
        <SideBar  />
        <div style={{ padding: '20px', flex: 1 }} className='main-container'>
          <Routes>
            <Route path="/lifestyle" element={<LifeStyle />} />
            <Route path="/jordan" element={<Jordan />} />
            <Route path="/running" element={<Running />} />
            <Route path="/basketball" element={<Basketball />} />
            <Route path="/training" element={<Training />} />
            <Route path="/cart" element={<Cart />} />
         
          </Routes>
        </div>
      </div>
   
    </>
  )
}

export default App
