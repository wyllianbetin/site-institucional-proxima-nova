
import React from 'react';

interface EcosystemCircleConnectorProps {
  ecosystemComponents: Array<{
    title: string;
    description: string;
    imagePath: string;
  }>;
  activeComponent: number | null;
  calculateArrowhead: (index: number, totalItems: number, radius: number, arrowSize?: number) => {
    point: { x: number; y: number };
    arrow1: { x: number; y: number };
    arrow2: { x: number; y: number };
    currentIndex: number;
    nextIndex: number;
  };
}

const EcosystemCircleConnector = ({ 
  ecosystemComponents, 
  activeComponent,
  calculateArrowhead 
}: EcosystemCircleConnectorProps) => {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
      {/* Circular path connecting all components */}
      <circle 
        cx="50" 
        cy="50" 
        r="20" 
        fill="none" 
        stroke={activeComponent !== null ? "#004762" : "#00476240"}
        strokeWidth="0.5"
        strokeDasharray={activeComponent !== null ? "0" : "2,1"}
        className="transition-all duration-300"
      />
      
      {/* Arrows along the circular path */}
      {ecosystemComponents.map((_, index) => {
        const arrowhead = calculateArrowhead(index, ecosystemComponents.length, 20, 2);
        const isActive = activeComponent === index || 
                        activeComponent === arrowhead.nextIndex;
        
        return (
          <g key={`arrow-${index}`} className="transition-all duration-500">
            {/* Arrow along the circular path */}
            <polygon 
              points={`
                ${50 + arrowhead.point.x},${50 + arrowhead.point.y} 
                ${50 + arrowhead.arrow1.x},${50 + arrowhead.arrow1.y} 
                ${50 + arrowhead.arrow2.x},${50 + arrowhead.arrow2.y}
              `}
              fill={isActive ? "#f8d14d" : "#00476280"}
              className="transition-all duration-300"
            />
          </g>
        );
      })}
    </svg>
  );
};

export default EcosystemCircleConnector;
