import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import LifeStyle from './pages/LifeStyle'; // Example component
import Jordan from './pages/Jordan'; // Example component
import Running from './pages/Running'; // Example component
import Basketball from './pages/Basketball'; // Example component
import Training from './pages/Training'; // Example component


function App() {
 
  return (
    <>
 <h1 className='heading'>Nike Shoes Store</h1>
 <Router>
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div style={{ marginLeft: '220px', padding: '20px', flex: 1 }}>
          <Routes>
            <Route path="/lifestyle" element={<LifeStyle />} />
            <Route path="/jordan" element={<Jordan />} />
            <Route path="/running" element={<Running />} />
            <Route path="/basketball" element={<Basketball />} />
            <Route path="/training" element={<Training />} />
         
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
