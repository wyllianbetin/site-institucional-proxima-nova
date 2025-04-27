
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallToAction from '@/components/common/CallToAction';
import { Check } from 'lucide-react';

const About = () => {
  const differentials = [
    "Unique ecosystem in Brazil", 
    "Specialized in marketplaces",
    "Over 11 years of online sales expertise",
    "Customized solutions for each business stage",
    "Full support from strategy to execution",
    "Focus on sustainable and profitable growth"
  ];

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="bg-proximanova-blue pt-32 pb-16 md:pt-36 md:pb-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Próxima Nova</h1>
          <div className="h-1 w-24 bg-proximanova-yellow mx-auto"></div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">Our Story</h2>
              <div className="h-1 w-16 bg-proximanova-yellow mb-6"></div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Próxima Nova was founded in 2012 with a clear mission: to help physical retailers 
                  successfully navigate the digital transformation journey. What started as a small 
                  consulting firm has grown into Brazil's leading ecosystem for marketplace success.
                </p>
                <p>
                  Over the years, we've worked with hundreds of retailers of all sizes, helping them 
                  establish, grow, and optimize their online presence. Our focus has always been on 
                  creating sustainable growth through strategic planning and operational excellence.
                </p>
                <p>
                  Today, Próxima Nova offers a complete set of solutions designed to address all 
                  aspects of digital retail, from education and technology to management and operations.
                </p>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Próxima Nova team at work" 
                className="absolute w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Purpose Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">Our Purpose</h2>
            <div className="h-1 w-16 bg-proximanova-yellow mx-auto mb-6"></div>
            <p className="text-xl font-medium text-gray-700 max-w-3xl mx-auto">
              Empowering physical retail to thrive in the digital environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-proximanova-blue mb-3">Mission</h3>
              <p className="text-gray-700">
                To provide retailers with the knowledge, tools, and support needed to succeed in the digital marketplace.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-semibold text-proximanova-blue mb-3">Vision</h3>
              <p className="text-gray-700">
                To be the leading digital transformation partner for retail businesses across Latin America.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-proximanova-blue mb-3">Values</h3>
              <p className="text-gray-700">
                Excellence, Innovation, Partnership, Transparency, and Results-oriented approach.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Differentials Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">Key Differentials</h2>
          <div className="h-1 w-16 bg-proximanova-yellow mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {differentials.map((differential, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-proximanova-blue/10 p-2 rounded-full mr-4 mt-1">
                  <Check className="h-4 w-4 text-proximanova-blue" />
                </div>
                <p className="text-gray-700">{differential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Want to learn more about how we can help your business?"
        buttonText="Get in touch"
        buttonLink="/contact"
      />
      
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default About;
