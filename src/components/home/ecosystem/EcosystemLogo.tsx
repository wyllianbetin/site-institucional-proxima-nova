
import React from 'react';

const EcosystemLogo = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-10 shadow-lg z-10 w-56 h-56 flex items-center justify-center">
      <img src="/logo.svg" alt="Próxima Nova" className="w-40 h-40 object-contain" />
    </div>
  );
};

export default EcosystemLogo;
