
import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const Solutions = () => {
  const solutions = [{
    title: "Curso + Consultoria",
    description: "Diagnóstico completo, plano de ação personalizado e consultoria estratégica para transformação digital.",
    icon: "📊",
    link: "/solutions#consulting",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  }, {
    title: "Programa Lojista Digital",
    description: "Uma solução prática para lojas físicas que querem vender no Mercado Livre de forma rápida e profissional.",
    icon: "🚀",
    link: "/solutions#digital-retailer",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }, {
    title: "Programa Seller",
    description: "Gestão de conta para vendedores estabelecidos que buscam escalar com eficiência usando inteligência de vendas.",
    icon: "📈",
    link: "/solutions#seller-program",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  }];

  return <section className="section bg-[#f5f4e2]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-proximanova-blue/10 p-3 rounded-full mb-4">
            <Briefcase className="h-6 w-6 text-proximanova-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-3">
            Nossas Soluções
          </h2>
          <div className="h-1 w-20 bg-proximanova-yellow mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">Ajudamos empresas em todos os estágios: Desde negócios que ainda não vendem online e desejam implementar uma operação de e-commerce, até sellers que já vendem e buscam otimizar e escalar seus resultados através do Mercado Livre.
Confira nossas soluções!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full">
                  <span className="text-2xl">{solution.icon}</span>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-proximanova-blue mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Link to={solution.link} className="inline-flex items-center text-proximanova-blue font-medium hover:text-proximanova-yellow transition-colors">
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/solutions" className="primary-btn">
            Ver Todas as Soluções
          </Link>
        </div>
      </div>
    </section>;
};

export default Solutions;
