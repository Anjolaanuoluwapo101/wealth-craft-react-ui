
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from './ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

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
        <DropdownMenu key={item.id}>
          <DropdownMenuTrigger className="px-3 py-2 hover:text-secondary-hover flex items-center">
            {item.label} <ChevronDown size={16} className="ml-1" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {item.children.map((child: any) => (
              <DropdownMenuItem key={child.id} asChild>
                <Link to={child.path} className="w-full">
                  {child.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        key={item.id}
        to={item.path}
        className="px-3 py-2 hover:text-secondary-hover"
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-6 lg:px-0">
          <Link to="/" className="text-2xl font-bold text-primary flex items-center">
            <span className="text-secondary">Wealth</span>Craft
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map(item => renderMenuItem(item))}
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-4">
                    {user.name} <ChevronDown size={16} className="ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="w-full">Dashboard</Link>
                  </DropdownMenuItem>
                  {(user.role === 'admin' || user.role === 'master') && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="w-full">Admin Panel</Link>
                    </DropdownMenuItem>
                  )}
                  {user.role === 'master' && (
                    <DropdownMenuItem asChild>
                      <Link to="/master-admin" className="w-full">Master Admin</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={logout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button variant="default" className="ml-4">
                  Login / Register
                </Button>
              </Link>
            )}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden bg-white py-4 px-6 border-t">
            <div className="flex flex-col space-y-3">
              {menuItems.map(item => {
                // Skip items requiring auth if user is not logged in
                if (item.requiresAuth && !user) {
                  return null;
                }

                if (item.children) {
                  return (
                    <div key={item.id} className="relative">
                      <Link
                        to={item.path}
                        className="block py-2 font-medium"
                        onClick={(e) => {
                          e.preventDefault();
                          // Toggle submenu logic would go here
                        }}
                      >
                        {item.label}
                      </Link>
                      <div className="pl-4 border-l-2 border-gray-200 ml-2 mt-1 space-y-1">
                        {item.children.map((child: any) => (
                          <Link
                            key={child.id}
                            to={child.path}
                            className="block py-1 text-gray-600 hover:text-secondary-hover"
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
                    className="block py-2 font-medium hover:text-secondary-hover"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              {user ? (
                <>
                  <Link to="/dashboard" className="block py-2 font-medium">
                    My Dashboard
                  </Link>
                  {(user.role === 'admin' || user.role === 'master') && (
                    <Link to="/admin" className="block py-2 font-medium">
                      Admin Panel
                    </Link>
                  )}
                  {user.role === 'master' && (
                    <Link to="/master-admin" className="block py-2 font-medium">
                      Master Admin
                    </Link>
                  )}
                  <button 
                    onClick={logout}
                    className="block py-2 font-medium text-left w-full"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="block py-2 font-medium">
                  Login / Register
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
