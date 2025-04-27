
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/about' },
    { name: 'Soluções', path: '/solutions' },
    { name: 'Ecossistema', path: '/ecosystem' },
    { name: 'Casos de Sucesso', path: '/success-cases' },
    { name: 'Contato', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Próxima Nova Logo"
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-proximanova-blue relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-proximanova-yellow after:transition-all after:duration-300 ${
                  isActive ? 'text-proximanova-blue after:w-full' : scrolled ? 'text-gray-700' : 'text-gray-800'
                }`
              }
              end={link.path === '/'}
            >
              {link.name}
            </NavLink>
          ))}
          <Button 
            className="bg-proximanova-yellow text-proximanova-blue hover:opacity-90 rounded shadow-sm whitespace-nowrap"
            size="sm"
          >
            Comece Agora
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-proximanova-blue" />
          ) : (
            <Menu className="h-6 w-6 text-proximanova-blue" />
          )}
        </Button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md py-4 animate-slide-in">
          <div className="container mx-auto space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block py-2 px-4 text-base font-medium transition-colors ${
                    isActive ? 'bg-gray-100 text-proximanova-blue' : 'text-gray-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="px-4 pt-3">
              <Button 
                className="w-full bg-proximanova-yellow text-proximanova-blue hover:opacity-90 rounded"
              >
                Comece Agora
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
