
import React from 'react';
import EcosystemComponentDetail from './EcosystemComponentDetail';
import { EcosystemComponentType } from '@/types/ecosystem';

interface EcosystemDetailComponentsProps {
  ecosystemComponents: EcosystemComponentType[];
}

const EcosystemDetailComponents = ({ ecosystemComponents }: EcosystemDetailComponentsProps) => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto space-y-16">
          {ecosystemComponents.map((component, index) => (
            <EcosystemComponentDetail key={index} component={component} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemDetailComponents;
