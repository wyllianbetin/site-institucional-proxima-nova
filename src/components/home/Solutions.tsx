
import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const Solutions = () => {
  const solutions = [{
    title: "Curso + Consultoria",
    description: "Treinamento e consultoria para quem quer iniciar no Mercado Livre com suporte e acompanhamento durante 6 meses.",
    link: "/solutions",
    image: "/consultoria.jpg"
  }, {
    title: "Programa Lojista Digital",
    description: "Implementamos e cuidamos da operação de vendas online para empresas que não têm tempo, equipe ou experiência em marketplaces.",
    link: "/solutions",
    image: "/programa_lojista_digital.jpg"
  }, {
    title: "Programa Seller",
    description: "Aceleramos sellers que já vendem online, cuidando, otimizando e escalando os resultados no Mercado Livre.",
    link: "/solutions",
    image: "/programa_seller.jpg"
  }];

  return <section className="section bg-proximanova-blue">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-white/10 p-3 rounded-full mb-4">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Nossas Soluções
          </h2>
          <div className="h-1 w-20 bg-proximanova-yellow mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-100">Ajudamos empresas em todos os estágios: Desde negócios que ainda não vendem online e desejam implementar uma operação de e-commerce, até sellers que já vendem e buscam otimizar e escalar seus resultados através do Mercado Livre.
Confira nossas soluções!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <Link key={index} to={solution.link} className="block">
              <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 h-full card-neon-effect">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-proximanova-blue mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                </CardContent>
                <CardFooter className="pt-0 flex justify-center">
                  <span className="inline-flex items-center text-proximanova-blue font-medium hover:text-proximanova-yellow transition-colors">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/solutions" className="bg-white text-proximanova-blue hover:bg-proximanova-yellow hover:text-proximanova-blue transition-colors px-6 py-3 rounded-md font-medium shadow-md">
            Ver Todas as Soluções
          </Link>
        </div>
      </div>

      <style>
        {`
          .card-neon-effect {
            position: relative;
            transition: all 0.3s ease;
          }
          
          .card-neon-effect:hover {
            box-shadow: 
              0 0 5px rgba(155, 135, 245, 0.5),
              0 0 15px rgba(155, 135, 245, 0.5),
              0 0 30px rgba(155, 135, 245, 0.5);
            transform: translateY(-5px);
          }
          
          .card-neon-effect::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 0.5rem;
            padding: 2px;
            background: linear-gradient(
              135deg, 
              #9b87f5, 
              #D946EF, 
              #1EAEDB, 
              #8B5CF6
            );
            -webkit-mask: 
              linear-gradient(#fff 0 0) content-box, 
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .card-neon-effect:hover::before {
            opacity: 1;
          }
        `}
      </style>
    </section>;
};

export default Solutions;
