
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import WhoWeAre from '@/components/home/WhoWeAre';
import Solutions from '@/components/home/Solutions';
import Ecosystem from '@/components/home/Ecosystem';
import SuccessCases from '@/components/home/SuccessCases';
import CallToAction from '@/components/common/CallToAction';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add event listeners for the magic card effect
    const cards = document.querySelectorAll('.card-neon-effect');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      // Clean up event listeners on component unmount
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  
  // Handle mouse movement over cards to create the magic card effect
  const handleMouseMove = (e: MouseEvent) => {
    const card = e.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    // Apply the 3D rotation effect
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Create a light reflection effect
    const reflection = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)`;
    card.style.backgroundImage = reflection;
  };
  
  // Reset card style when mouse leaves
  const handleMouseLeave = (e: MouseEvent) => {
    const card = e.currentTarget as HTMLElement;
    card.style.transform = '';
    card.style.backgroundImage = '';
  };

  return (
    <>
      <Header />
      <Hero />
      <WhoWeAre />
      <Ecosystem />
      <Solutions />
      <SuccessCases />
      <CallToAction 
        title="Pronto para escalar as suas vendas online?"
        buttonText="Fale com um Consultor"
        buttonLink="/contact"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
