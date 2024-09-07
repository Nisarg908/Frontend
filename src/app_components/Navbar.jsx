import React, { useState } from "react";
import sidebarData from "../sidebarContent.json";  // Adjust the path as needed
import { Link, useLocation } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";

function Dashboardnavbar({ links, footer }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  const location = useLocation();
  return (
    <div>
      {isSidebarOpen && (
        <aside className="sidebar">
          <div className="sidebar-header">
            <button className="close-btn" onClick={toggleSidebar}>
              &times;
            </button>
          </div>
          <nav className="sidebar-nav">
            {links.map((link, index) => (
              <Link key={index} to={link.href} className={`nav-link ${location.pathname === link.href ? 'active' : ''}`}>
                <div className="icon"><img src={link.iconClass} alt="" /></div>
                {link.text}
              </Link>
            ))}
          </nav>
          <footer className="sidebar-footer">
            <img src={footer.logoSrc} alt={footer.text} className="logo" />
            <p>{footer.text}</p>
          </footer>
        </aside>
      )}
      <div className={`main-wrapper ${isSidebarOpen ? '' : 'expanded'}`}>
        <div className="toggle-wrapper">
          {!isSidebarOpen && (
            <button className="nav-toggle-btn" onClick={toggleSidebar}>
              {/* <img src={TfiMenuAlt} alt="Open Sidebar" className="custom-toggle-icon" /> */}
              <TfiMenuAlt />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return <Dashboardnavbar links={sidebarData.links} footer={sidebarData.footer} />;
}
