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
      </nav>
    </div>
    <hr/>
  </div>
);
};
export default Header;