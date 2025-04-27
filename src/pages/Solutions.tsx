
import React, { useEffect, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallToAction from '@/components/common/CallToAction';
import { Check, Briefcase, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="bg-proximanova-blue pt-32 pb-16 md:pt-36 md:pb-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto mb-6">
            Complete programs designed to meet your business needs at every stage of digital transformation.
          </p>
          <div className="h-1 w-24 bg-proximanova-yellow mx-auto"></div>
        </div>
      </div>
      
      {/* Solutions Overview */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">
              Solutions for Every Stage of Your Digital Journey
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Whether you're just starting to explore digital channels or looking to optimize your 
              existing marketplace operations, we have the right solution for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div 
              className="solution-card text-center"
              onClick={() => consultingRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="bg-proximanova-blue/10 h-20 w-20 flex items-center justify-center rounded-full mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-proximanova-blue" />
              </div>
              <h3 className="text-xl font-bold text-proximanova-blue mb-3">Strategic Consulting</h3>
              <p className="text-gray-600 mb-6">For businesses looking to develop a digital strategy.</p>
              <button className="text-proximanova-blue font-medium hover:text-proximanova-yellow transition-colors flex items-center justify-center w-full">
                Learn more
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
            
            <div 
              className="solution-card text-center"
              onClick={() => retailerRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="bg-proximanova-blue/10 h-20 w-20 flex items-center justify-center rounded-full mx-auto mb-6">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-proximanova-blue mb-3">Digital Retailer Program</h3>
              <p className="text-gray-600 mb-6">For physical stores starting to sell online.</p>
              <button className="text-proximanova-blue font-medium hover:text-proximanova-yellow transition-colors flex items-center justify-center w-full">
                Learn more
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
            
            <div 
              className="solution-card text-center"
              onClick={() => sellerRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="bg-proximanova-blue/10 h-20 w-20 flex items-center justify-center rounded-full mx-auto mb-6">
                <span className="text-4xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-proximanova-blue mb-3">Seller Program</h3>
              <p className="text-gray-600 mb-6">For established sellers looking to scale operations.</p>
              <button className="text-proximanova-blue font-medium hover:text-proximanova-yellow transition-colors flex items-center justify-center w-full">
                Learn more
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Strategic Consulting Section */}
      <section id="consulting" ref={consultingRef} className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">Strategic Consulting</h2>
              <div className="h-1 w-16 bg-proximanova-yellow mb-6"></div>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>
                  Our Strategic Consulting service provides a complete analysis of your business, 
                  identifying the best opportunities to enter and thrive in digital marketplaces.
                </p>
                <p>
                  We deliver a customized action plan with clear steps for implementing your 
                  digital transformation strategy, supported by expert guidance at every stage.
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                <h3 className="font-semibold text-lg text-proximanova-blue">What's included:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {["Business diagnosis", "Market opportunity analysis", "Competitive positioning", "Customized action plan", "Implementation roadmap", "ROI projections"].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-proximanova-blue/10 p-1 rounded-full mr-3 mt-1">
                        <Check className="h-3 w-3 text-proximanova-blue" />
                      </div>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link to="/contact" className="primary-btn">
                Request a consultation
              </Link>
            </div>
            
            <div className="relative h-80 md:h-96 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                alt="Strategic consulting session" 
                className="absolute w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Digital Retailer Program Section */}
      <section id="digital-retailer" ref={retailerRef} className="section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-80 md:h-96 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Digital retailer working on marketplace" 
                className="absolute w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">Digital Retailer Program</h2>
              <div className="h-1 w-16 bg-proximanova-yellow mb-6"></div>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>
                  The Digital Retailer Program is a practical solution for physical stores wanting to sell on 
                  Mercado Livre quickly and professionally. We guide your team through the entire process.
                </p>
                <p>
                  Our program includes hands-on training, system setup, and ongoing support to ensure 
                  your team has all the tools and knowledge needed to succeed.
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                <h3 className="font-semibold text-lg text-proximanova-blue">What's included:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    "Account setup assistance", 
                    "Product listing creation", 
                    "Pricing strategy", 
                    "Inventory management training", 
                    "Customer service protocols", 
                    "Marketing best practices",
                    "Performance tracking",
                    "Ongoing support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-proximanova-blue/10 p-1 rounded-full mr-3 mt-1">
                        <Check className="h-3 w-3 text-proximanova-blue" />
                      </div>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link to="/contact" className="primary-btn">
                Join the program
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seller Program Section */}
      <section id="seller-program" ref={sellerRef} className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">Seller Program</h2>
              <div className="h-1 w-16 bg-proximanova-yellow mb-6"></div>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>
                  Our Seller Program is designed for established marketplace sellers looking to 
                  scale their operations efficiently and achieve high-performance sales.
                </p>
                <p>
                  We provide advanced strategies, analytics, and operational support to optimize your 
                  marketplace presence, increase visibility, and improve conversion rates.
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                <h3 className="font-semibold text-lg text-proximanova-blue">What's included:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    "Account performance analysis", 
                    "Advanced listing optimization", 
                    "Advertising strategy and management", 
                    "Competitor benchmarking", 
                    "Inventory optimization", 
                    "Expansion planning",
                    "Brand development",
                    "Growth acceleration"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-proximanova-blue/10 p-1 rounded-full mr-3 mt-1">
                        <Check className="h-3 w-3 text-proximanova-blue" />
                      </div>
                      <p className="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link to="/contact" className="primary-btn">
                Scale your business
              </Link>
            </div>
            
            <div className="relative h-80 md:h-96 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Advanced seller operations" 
                className="absolute w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
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
