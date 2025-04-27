
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

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhoWeAre />
      <Solutions />
      <Ecosystem />
      <SuccessCases />
      <CallToAction 
        title="Pronto para iniciar sua transformação digital?"
        buttonText="Agende uma consultoria"
        buttonLink="/contact"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
