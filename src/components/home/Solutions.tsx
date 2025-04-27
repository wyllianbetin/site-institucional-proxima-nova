
import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const solutions = [
    {
      title: "Strategic Consulting",
      description: "Complete diagnostics, custom action plan, and strategic consulting for digital transformation.",
      icon: "📊",
      link: "/solutions#consulting",
    },
    {
      title: "Digital Retailer Program",
      description: "A practical solution for physical stores wanting to sell on Mercado Livre quickly and professionally.",
      icon: "🚀",
      link: "/solutions#digital-retailer",
    },
    {
      title: "Seller Program",
      description: "Account management for established sellers aiming to scale efficiently with high-performance sales intelligence.",
      icon: "📈",
      link: "/solutions#seller-program",
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-proximanova-blue/10 p-3 rounded-full mb-4">
            <Briefcase className="h-6 w-6 text-proximanova-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-3">
            Our Solutions
          </h2>
          <div className="h-1 w-20 bg-proximanova-yellow mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Tailored programs to support your business at any stage of the digital journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="solution-card"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-proximanova-blue mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <Link 
                to={solution.link} 
                className="inline-flex items-center text-proximanova-blue font-medium hover:text-proximanova-yellow transition-colors"
              >
                Learn more
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/solutions" 
            className="primary-btn"
          >
            View All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
