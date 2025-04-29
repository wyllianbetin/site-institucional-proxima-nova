
import { Layers, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ecosystemComponents } from './EcosystemData';
import EcosystemCircle from './EcosystemCircle';
import EcosystemMobileGrid from './EcosystemMobileGrid';

const EcosystemSection = () => {
  const [activeComponent, setActiveComponent] = useState<number | null>(null);

  return (
    <section className="section bg-[#f5f4e2] py-12 md:py-18">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-4">
          <div className="bg-proximanova-blue/10 p-3 rounded-full mb-4">
            <Layers className="h-6 w-6 text-proximanova-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-3">
            Ecossistema Próxima Nova
          </h2>
          <div className="h-1 w-20 bg-proximanova-yellow mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Desenvolvemos um ecossistema completo para atender nossos clientes de ponta a ponta.
            Terceirize a rotina das vendas online e foque no que realmente importa: levar o seu negócio para o próximo nível. Deixe a parte operacional com a gente.
          </p>
        </div>

        {/* Circular layout for desktop */}
        <EcosystemCircle 
          ecosystemComponents={ecosystemComponents}
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />

        {/* Mobile version with grid layout */}
        <EcosystemMobileGrid ecosystemComponents={ecosystemComponents} />

        <div className="text-center -mt-2">
          <Link to="/ecosystem" className="inline-flex items-center gap-2 bg-proximanova-blue text-white px-6 py-3 rounded-md hover:bg-proximanova-blue/90 transition-colors">
            Saiba mais sobre nosso ecossistema
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
