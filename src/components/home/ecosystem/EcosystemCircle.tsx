
import React from 'react';
import EcosystemComponent from './EcosystemComponent';
import EcosystemCircleConnector from './EcosystemCircleConnector';
import EcosystemLogo from './EcosystemLogo';
import { calculatePosition, calculateArrowhead } from './EcosystemData';

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
    <div className="hidden md:block relative mb-10">
      <div className="relative w-full max-w-5xl mx-auto aspect-square">
        {/* Central logo */}
        <EcosystemLogo />

        {/* Connection lines using SVG - Circular flow with arrows */}
        <EcosystemCircleConnector 
          ecosystemComponents={ecosystemComponents}
          activeComponent={activeComponent}
          calculateArrowhead={calculateArrowhead}
        />

        {/* Component cards positioned around the circle */}
        {ecosystemComponents.map((component, index) => {
          const position = calculatePosition(index, ecosystemComponents.length, 33);
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
