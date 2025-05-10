
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const renderMenuItem = (item: any) => {
    // Skip items requiring auth if user is not logged in
    if (item.requiresAuth && !user) {
      return null;
    }

    if (item.children) {
      return (
        <div key={item.id} className="w3-dropdown-hover">
          <button className="w3-button">
            {item.label} <i className="fa fa-caret-down"></i>
          </button>
          <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{minWidth: '200px'}}>
            {item.children.map((child: any) => (
              <Link 
                key={child.id} 
                to={child.path} 
                className="w3-bar-item w3-button w3-hover-theme"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    return (
      <Link
        key={item.id}
        to={item.path}
        className="w3-bar-item w3-button w3-hover-theme"
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="w3-white w3-card">
      <div className="w3-container">
        {/* Desktop Navigation */}
        <div className="w3-bar">
          <Link to="/" className="w3-bar-item w3-button w3-padding-16">
            <span className="w3-large">
              <span className="w3-text-amber">Wealth</span>
              <span className="w3-text-theme">Craft</span>
            </span>
          </Link>
          
          <div className="w3-right w3-hide-medium w3-hide-small">
            {/* Navigation Items */}
            {menuItems.map(item => renderMenuItem(item))}
            
            {user ? (
              <div className="w3-dropdown-hover">
                <button className="w3-button w3-padding-16">
                  {user.name} <i className="fa fa-caret-down"></i>
                </button>
                <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{right: 0, minWidth: '200px'}}>
                  <Link to="/dashboard" className="w3-bar-item w3-button w3-hover-theme">
                    Dashboard
                  </Link>
                  {(user.role === 'admin' || user.role === 'master') && (
                    <Link to="/admin" className="w3-bar-item w3-button w3-hover-theme">
                      Admin Panel
                    </Link>
                  )}
                  {user.role === 'master' && (
                    <Link to="/master-admin" className="w3-bar-item w3-button w3-hover-theme">
                      Master Admin
                    </Link>
                  )}
                  <button 
                    onClick={logout}
                    className="w3-bar-item w3-button w3-hover-theme"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="w3-bar-item w3-button w3-theme w3-padding-16">
                  Login / Register
                </button>
              </Link>
            )}
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="w3-bar-item w3-button w3-right w3-hide-large w3-padding-16"
            onClick={toggleMobileMenu}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="w3-bar-block w3-hide-large w3-animate-opacity">
            {menuItems.map(item => {
              // Skip items requiring auth if user is not logged in
              if (item.requiresAuth && !user) {
                return null;
              }

              if (item.children) {
                return (
                  <div key={item.id} className="w3-block">
                    <div className="w3-bar-item">{item.label}</div>
                    <div className="w3-padding-left-16">
                      {item.children.map((child: any) => (
                        <Link
                          key={child.id}
                          to={child.path}
                          className="w3-bar-item w3-button w3-hover-theme"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className="w3-bar-item w3-button w3-hover-theme"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            
            {user ? (
              <>
                <Link to="/dashboard" 
                  className="w3-bar-item w3-button w3-hover-theme"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Dashboard
                </Link>
                {(user.role === 'admin' || user.role === 'master') && (
                  <Link to="/admin" 
                    className="w3-bar-item w3-button w3-hover-theme"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin Panel
                  </Link>
                )}
                {user.role === 'master' && (
                  <Link to="/master-admin" 
                    className="w3-bar-item w3-button w3-hover-theme"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Master Admin
                  </Link>
                )}
                <button 
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w3-bar-item w3-button w3-hover-theme w3-text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" 
                className="w3-bar-item w3-button w3-theme"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login / Register
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
