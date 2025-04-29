
import React, { useState } from 'react';

const EcosystemLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        bg-proximanova-blue rounded-full p-10 shadow-lg z-10 w-56 h-56 
        flex items-center justify-center transition-all duration-300
        ${isHovered ? 'border-4 border-proximanova-yellow' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="/logo_proxima_ecossistema.png" alt="Próxima Nova" className="w-40 h-40 object-contain" />
    </div>
  );
};

export default EcosystemLogo;
