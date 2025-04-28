
import React, { useEffect, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallToAction from '@/components/common/CallToAction';
import { useLocation } from 'react-router-dom';
import SolutionHeader from '@/components/solutions/SolutionHeader';
import SolutionsOverview from '@/components/solutions/SolutionsOverview';
import SolutionSection from '@/components/solutions/SolutionSection';

const Solutions = () => {
  const location = useLocation();
  const consultingRef = useRef<HTMLDivElement>(null);
  const retailerRef = useRef<HTMLDivElement>(null);
  const sellerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle scroll to section based on URL hash
    const hash = location.hash;
    
    if (hash === '#consulting' && consultingRef.current) {
      setTimeout(() => {
        consultingRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (hash === '#digital-retailer' && retailerRef.current) {
      setTimeout(() => {
        retailerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (hash === '#seller-program' && sellerRef.current) {
      setTimeout(() => {
        sellerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  const scrollToConsulting = () => consultingRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToRetailer = () => retailerRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToSeller = () => sellerRef.current?.scrollIntoView({ behavior: 'smooth' });

  const consultingData = {
    id: "consulting",
    title: "Curso + Consultoria",
    description: [
      "Our Strategic Consulting service provides a complete analysis of your business, identifying the best opportunities to enter and thrive in digital marketplaces.",
      "We deliver a customized action plan with clear steps for implementing your digital transformation strategy, supported by expert guidance at every stage."
    ],
    features: [
      "Business diagnosis", 
      "Market opportunity analysis", 
      "Competitive positioning", 
      "Customized action plan", 
      "Implementation roadmap", 
      "ROI projections"
    ],
    buttonText: "Request a consultation",
    imageSrc: "/consultoria.jpg",
    imageAlt: "Strategic consulting session"
  };

  const retailerData = {
    id: "digital-retailer",
    title: "Programa Lojista Digital",
    description: [
      "The Digital Retailer Program is a practical solution for physical stores wanting to sell on Mercado Livre quickly and professionally. We guide your team through the entire process.",
      "Our program includes hands-on training, system setup, and ongoing support to ensure your team has all the tools and knowledge needed to succeed."
    ],
    features: [
      "Account setup assistance", 
      "Product listing creation", 
      "Pricing strategy", 
      "Inventory management training", 
      "Customer service protocols", 
      "Marketing best practices",
      "Performance tracking",
      "Ongoing support"
    ],
    buttonText: "Join the program",
    imageSrc: "/programa_lojista_digital.jpg",
    imageAlt: "Digital retailer working on marketplace"
  };

  const sellerData = {
    id: "seller-program",
    title: "Programa Seller",
    description: [
      "Our Seller Program is designed for established marketplace sellers looking to scale their operations efficiently and achieve high-performance sales.",
      "We provide advanced strategies, analytics, and operational support to optimize your marketplace presence, increase visibility, and improve conversion rates."
    ],
    features: [
      "Account performance analysis", 
      "Advanced listing optimization", 
      "Advertising strategy and management", 
      "Competitor benchmarking", 
      "Inventory optimization", 
      "Expansion planning",
      "Brand development",
      "Growth acceleration"
    ],
    buttonText: "Scale your business",
    imageSrc: "/programa_seller.jpg",
    imageAlt: "Advanced seller operations"
  };

  return (
    <>
      <Header />
      <SolutionHeader />
      <SolutionsOverview 
        onScrollToConsulting={scrollToConsulting}
        onScrollToRetailer={scrollToRetailer}
        onScrollToSeller={scrollToSeller}
      />
      
      <SolutionSection 
        {...consultingData}
        innerRef={consultingRef}
      />
      
      <SolutionSection 
        {...retailerData}
        reverseLayout={true}
        innerRef={retailerRef}
      />
      
      <SolutionSection 
        {...sellerData}
        innerRef={sellerRef}
      />
      
      <CallToAction 
        title="Ready to find the right solution for your business?"
        buttonText="Talk to a specialist"
        buttonLink="/contact"
      />
      
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Solutions;
