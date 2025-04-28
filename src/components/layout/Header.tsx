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
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Sobre',
      path: '/about'
    },
    {
      name: 'Soluções',
      path: '/solutions'
    },
    {
      name: 'Ecossistema',
      path: '/ecosystem'
    },
    {
      name: 'Casos de Sucesso',
      path: '/success-cases'
    },
    {
      name: 'Contato',
      path: '/contact'
    }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-4'} bg-proximanova-blue`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.svg"
            alt="Próxima Nova Logo" 
            className="h-8 md:h-10 w-auto transition-all duration-300"
            loading="eager"
            decoding="async"
          />
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => <NavLink key={link.path} to={link.path} className={({
            isActive
          }) => `text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-proximanova-yellow after:transition-all after:duration-300 hover:after:w-full after:origin-bottom-right hover:after:origin-bottom-left ${
            isActive 
              ? 'text-white after:w-full' 
              : 'text-white hover:text-white'
          }`} end={link.path === '/'}>
              {link.name}
            </NavLink>)}
          <Button className="bg-proximanova-yellow text-proximanova-blue hover:bg-proximanova-yellow hover:opacity-90 rounded shadow-sm whitespace-nowrap" size="sm">
            Comece Agora
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-proximanova-blue shadow-md py-4 animate-slide-in">
          <div className="container mx-auto space-y-3">
            {navLinks.map(link => <NavLink key={link.path} to={link.path} className={({
              isActive
            }) => `block py-2 px-4 text-base font-medium transition-colors ${isActive ? 'bg-proximanova-blue/20 text-white' : 'text-white hover:bg-proximanova-blue/10'}`} onClick={() => setIsMenuOpen(false)} end={link.path === '/'}>
                {link.name}
              </NavLink>)}
            <div className="px-4 pt-3">
              <Button className="w-full bg-proximanova-yellow text-proximanova-blue hover:bg-proximanova-yellow hover:opacity-90 rounded">
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
