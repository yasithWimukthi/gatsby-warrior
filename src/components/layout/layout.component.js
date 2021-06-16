import React from 'react';
import Navbar from "../navbar/navbar.component";
import '../../styles/global.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar/>
      <div className="content">
        {children}
      </div>
      <footer>
        <p>Copyright 2021 Web Warrior</p>
      </footer>
    </div>
  )
}

export default Layout;
