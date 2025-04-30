
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
    <div className="hidden md:block relative mb-0 -mt-4">
      <div className="relative w-full max-w-5xl mx-auto aspect-square">
        {/* Central logo */}
        <EcosystemLogo />

        {/* Component cards positioned around the circle */}
        {ecosystemComponents.map((component, index) => {
          const position = calculatePosition(index, ecosystemComponents.length, 22);
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
