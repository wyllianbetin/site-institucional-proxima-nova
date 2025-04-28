
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return <div className="relative bg-proximanova-blue pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight hero-text-shadow">Somos especialistas em Mercado Livre</h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-lg">Ajudamos empresas a iniciarem ou escalarem as vendas através do maior marketplace da América Latina</p>
            <div>
              <Link to="/contact" className="inline-flex items-center gap-2 secondary-btn">
                Quero digitalizar meu negócio
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-xl animate-fade-in">
            <img 
              src="https://raw.githubusercontent.com/wyllianbetin/site-institucional-proxima-nova/refs/heads/main/public/imagem%20principal%20site.webp?token=GHSAT0AAAAAADC52MQ25HYX3F4XVGXLJBZE2AO5XAQ" 
              alt="Centro de distribuição do Mercado Livre com ambiente logístico" 
              className="absolute w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-proximanova-blue/10"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
        clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)"
      }}></div>
    </div>;
};

export default Hero;
