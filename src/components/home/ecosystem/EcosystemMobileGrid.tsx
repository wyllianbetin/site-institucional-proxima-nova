
import React from 'react';
import EcosystemMobileComponent from './EcosystemMobileComponent';

interface EcosystemMobileGridProps {
  ecosystemComponents: Array<{
    title: string;
    description: string;
    imagePath: string;
  }>;
}

const EcosystemMobileGrid = ({ ecosystemComponents }: EcosystemMobileGridProps) => {
  return (
    <div className="md:hidden grid grid-cols-2 gap-4 mb-3">
      {ecosystemComponents.map((component, index) => (
        <EcosystemMobileComponent key={index} component={component} index={index} />
      ))}
    </div>
  );
};

export default EcosystemMobileGrid;
