import React, { useState } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import { HeaderData } from "./HeaderData";
  
const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="Header">
      <hr/>
    <div value={{ color: '#fff' }}>
      <nav>
              {HeaderData.map((item, index) => {
                return (
                  <span key={index} className={item.cName} onClick={showSidebar}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </span>
              );
          })}

        {/* <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars-x' >
            <span className='x'>&times;</span>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul> */}
      </nav>
    </div>
    <hr/>
  </div>
);
};
export default Header;