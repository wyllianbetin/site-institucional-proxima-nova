
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-proximanova-blue text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Próxima<span className="text-proximanova-yellow">Nova</span></h3>
            <p className="text-sm leading-relaxed">
              Empowering physical retail to thrive in the digital environment with our complete ecosystem of solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm hover:text-proximanova-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-proximanova-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm hover:text-proximanova-yellow transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/ecosystem" className="text-sm hover:text-proximanova-yellow transition-colors">
                  Our Ecosystem
                </Link>
              </li>
              <li>
                <Link to="/success-cases" className="text-sm hover:text-proximanova-yellow transition-colors">
                  Success Cases
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions#consulting" className="text-sm hover:text-proximanova-yellow transition-colors">
                  Strategic Consulting
                </Link>
              </li>
              <li>
                <Link to="/solutions#digital-retailer" className="text-sm hover:text-proximanova-yellow transition-colors">
                  Digital Retailer Program
                </Link>
              </li>
              <li>
                <Link to="/solutions#seller-program" className="text-sm hover:text-proximanova-yellow transition-colors">
                  Seller Program
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-proximanova-yellow" />
                <a href="mailto:contact@proximanova.com" className="text-sm hover:text-proximanova-yellow transition-colors">
                  contact@proximanova.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-proximanova-yellow" />
                <a href="tel:+551122334455" className="text-sm hover:text-proximanova-yellow transition-colors">
                  +55 11 2233-4455
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-proximanova-yellow mt-1" />
                <span className="text-sm">
                  São Paulo, SP - Brazil
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs mb-4 md:mb-0">
              &copy; {currentYear} Próxima Nova. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy-policy" className="text-xs hover:text-proximanova-yellow transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-xs hover:text-proximanova-yellow transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
