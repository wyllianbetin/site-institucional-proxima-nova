
import React from 'react';
import { Card } from "@/components/ui/card";

interface EcosystemComponentProps {
  component: {
    title: string;
    description: string;
    imagePath: string;
  };
  position: { x: number; y: number };
  index: number;
  activeComponent: number | null;
  setActiveComponent: (index: number | null) => void;
  totalItems: number;
}

const EcosystemComponent = ({ 
  component, 
  position, 
  index, 
  activeComponent, 
  setActiveComponent,
  totalItems
}: EcosystemComponentProps) => {
  return (
    <div 
      key={index}
      className={`absolute transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden shadow-md
        ${activeComponent === index ? 'scale-[1.4] z-30 shadow-xl' : 'z-20'}
      `}
      style={{ 
        left: `calc(50% + ${position.x}%)`, 
        top: `calc(50% + ${position.y}%)`,
        width: '18%',
        aspectRatio: '1/1',
      }}
      onMouseEnter={() => setActiveComponent(index)}
      onMouseLeave={() => setActiveComponent(null)}
    >
      <Card className={`w-full h-full rounded-full overflow-hidden ${activeComponent === index ? 'border-4 border-proximanova-yellow' : 'border-4 border-white'} group`}>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="absolute inset-0">
            <img 
              src={component.imagePath}
              alt={component.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
              }}
            />
            <div className="absolute inset-0 bg-proximanova-blue/60 group-hover:bg-proximanova-blue/80 transition-colors duration-300"></div>
          </div>
          <div className={`relative z-10 text-white text-center p-3 w-full ${activeComponent === index ? 'pt-2' : ''}`}>
            <h3 className="text-base font-bold mb-1">{component.title}</h3>
            {activeComponent === index ? (
              <p className="text-xs leading-tight">
                {component.description}
              </p>
            ) : (
              <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {component.description.split(' ').slice(0, 5).join(' ')}...
              </p>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EcosystemComponent;
