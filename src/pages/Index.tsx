
import React from 'react';
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
import { useEffect } from 'react';

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

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
