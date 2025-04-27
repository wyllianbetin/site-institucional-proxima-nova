
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import WhatsAppButton from '@/components/common/WhatsAppButton';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-proximanova-blue mb-6">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Oops! Page not found</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="bg-proximanova-blue hover:opacity-90">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default NotFound;
