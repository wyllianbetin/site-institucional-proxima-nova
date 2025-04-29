
import React from 'react';

interface EcosystemMobileComponentProps {
  component: {
    title: string;
    description: string;
    imagePath: string;
  };
  index: number;
}

const EcosystemMobileComponent = ({ component, index }: EcosystemMobileComponentProps) => {
  return (
    <div key={index} className="relative rounded-lg overflow-hidden aspect-square shadow-md">
      <div className="relative h-full w-full">
        <img 
          src={component.imagePath}
          alt={component.title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={e => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
          }}
        />
        <div className="absolute inset-0 bg-proximanova-blue/70 flex flex-col items-center justify-center p-3 text-center">
          <h3 className="text-sm font-bold text-white">{component.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default EcosystemMobileComponent;
