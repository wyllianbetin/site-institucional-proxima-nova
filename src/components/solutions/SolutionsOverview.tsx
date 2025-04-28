
import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const SolutionCard = ({ title, description, icon, onClick }: SolutionCardProps) => (
  <div className="solution-card text-center" onClick={onClick}>
    <div className="bg-proximanova-blue/10 h-20 w-20 flex items-center justify-center rounded-full mx-auto mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-proximanova-blue mb-3">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <button className="text-proximanova-blue font-medium hover:text-proximanova-yellow transition-colors flex items-center justify-center w-full">
      Learn more
      <ArrowRight className="h-4 w-4 ml-2" />
    </button>
  </div>
);

interface SolutionsOverviewProps {
  onScrollToConsulting: () => void;
  onScrollToRetailer: () => void;
  onScrollToSeller: () => void;
}

const SolutionsOverview = ({ 
  onScrollToConsulting, 
  onScrollToRetailer, 
  onScrollToSeller 
}: SolutionsOverviewProps) => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">
            Solutions for Every Stage of Your Digital Journey
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Whether you're just starting to explore digital channels or looking to optimize your 
            existing marketplace operations, we have the right solution for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <SolutionCard 
            title="Curso + Consultoria"
            description="For businesses looking to develop a digital strategy."
            icon={<Briefcase className="h-8 w-8 text-proximanova-blue" />}
            onClick={onScrollToConsulting}
          />
          
          <SolutionCard 
            title="Programa Lojista Digital"
            description="For physical stores starting to sell online."
            icon={<span className="text-4xl">🚀</span>}
            onClick={onScrollToRetailer}
          />
          
          <SolutionCard 
            title="Programa Seller"
            description="For established sellers looking to scale operations."
            icon={<span className="text-4xl">📈</span>}
            onClick={onScrollToSeller}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
