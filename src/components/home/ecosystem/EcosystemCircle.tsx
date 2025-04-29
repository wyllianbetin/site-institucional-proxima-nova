
import React from 'react';
import EcosystemComponent from './EcosystemComponent';
import EcosystemLogo from './EcosystemLogo';
import { calculatePosition } from './EcosystemData';

interface EcosystemCircleProps {
  ecosystemComponents: Array<{
    title: string;
    description: string;
    imagePath: string;
  }>;
  activeComponent: number | null;
  setActiveComponent: (index: number | null) => void;
}

const EcosystemCircle = ({ 
  ecosystemComponents, 
  activeComponent, 
  setActiveComponent 
}: EcosystemCircleProps) => {
  return (
    <div className="hidden md:block relative mb-4">
      <div className="relative w-full max-w-4xl mx-auto aspect-square">
        {/* Connection circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full border-8 border-proximanova-blue z-0"></div>
        
        {/* Central logo */}
        <EcosystemLogo />

        {/* Component cards positioned around the circle */}
        {ecosystemComponents.map((component, index) => {
          const position = calculatePosition(index, ecosystemComponents.length, 20);
          return (
            <EcosystemComponent
              key={index}
              component={component}
              position={position}
              index={index}
              activeComponent={activeComponent}
              setActiveComponent={setActiveComponent}
              totalItems={ecosystemComponents.length}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EcosystemCircle;
