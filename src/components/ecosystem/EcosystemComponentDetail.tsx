
import React from 'react';
import { EcosystemComponentType } from '@/types/ecosystem';

interface EcosystemComponentDetailProps {
  component: EcosystemComponentType;
}

const EcosystemComponentDetail = ({ component }: EcosystemComponentDetailProps) => {
  return (
    <div id={component.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side content */}
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="bg-proximanova-blue/10 p-3 rounded-full mr-4">
              {component.icon}
            </div>
            <h3 className="font-semibold text-xl text-proximanova-blue">{component.title}</h3>
          </div>
          
          <p className="text-gray-700 mb-6">{component.description}</p>
          
          <h4 className="font-semibold text-lg mb-4 text-proximanova-blue">Características</h4>
          <ul className="space-y-3 mb-6">
            {component.features.map((feature, fIndex) => (
              <li key={fIndex} className="flex items-start">
                <div className="bg-proximanova-blue/20 p-1.5 rounded-full mr-3 mt-1">
                  <div className="h-2 w-2 bg-proximanova-blue rounded-full"></div>
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          
          {component.extraContent && component.extraContent}
        </div>
        
        {/* Right side image */}
        <div className="md:block relative">
          <div className="h-full">
            <img 
              src={component.imagePath} 
              alt={component.title} 
              className="w-full h-full object-cover md:absolute inset-0"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
              }}
            />
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-proximanova-blue/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemComponentDetail;
