
import React, { useRef, useEffect } from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const Solutions = () => {
  const solutions = [{
    title: "Curso + Consultoria",
    description: "Treinamento e consultoria para quem quer iniciar no Mercado Livre com suporte e acompanhamento durante 6 meses.",
    link: "/solutions#consulting",
    image: "/consultoria.jpg"
  }, {
    title: "Programa Lojista Digital",
    description: "Implementamos e cuidamos da operação de vendas online para empresas que não têm tempo, equipe ou experiência em marketplaces.",
    link: "/solutions#digital-retailer",
    image: "/programa_lojista_digital.jpg"
  }, {
    title: "Programa Seller",
    description: "Aceleramos sellers que já vendem online, cuidando, otimizando e escalando os resultados no Mercado Livre.",
    link: "/solutions#seller-program",
    image: "/programa_seller.jpg"
  }];

  // Create refs for the magic card containers
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Add event listeners for mouse movement on the cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, index: number) => {
      const card = cardRefs.current[index];
      if (!card) return;
      
      // Get card dimensions and position
      const rect = card.getBoundingClientRect();
      
      // Calculate mouse position relative to card center (in percentage)
      const x = ((e.clientX - rect.left) / rect.width) * 200 - 100;
      const y = ((e.clientY - rect.top) / rect.height) * 200 - 100;
      
      // Update CSS variables for lighting effect
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    // Add event listeners
    cardRefs.current.forEach((card, index) => {
      if (card) {
        card.addEventListener('mousemove', (e) => handleMouseMove(e, index));
      }
    });

    // Cleanup
    return () => {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          card.removeEventListener('mousemove', (e) => handleMouseMove(e, index));
        }
      });
    };
  }, []);

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
            <Link key={index} to={solution.link} className="block magic-card-container">
              <div 
                ref={el => cardRefs.current[index] = el} 
                className="magic-card h-full rounded-xl overflow-hidden relative border-0 shadow-lg"
              >
                <div className="magic-card-inner h-full bg-white rounded-xl overflow-hidden">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="magic-card-reflection absolute inset-0"></div>
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-proximanova-blue mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                  </CardContent>
                  <CardFooter className="pt-0 flex justify-center">
                    <span className="inline-flex items-center text-proximanova-blue font-medium group-hover:text-proximanova-yellow transition-colors">
                      Saiba mais
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </span>
                  </CardFooter>
                </div>
                <div className="magic-card-border absolute inset-0 rounded-xl pointer-events-none"></div>
                <div className="magic-card-glow absolute inset-0 rounded-xl pointer-events-none opacity-0"></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/solutions" onClick={() => window.scrollTo(0, 0)} className="bg-white text-proximanova-blue hover:bg-proximanova-yellow hover:text-proximanova-blue transition-colors px-6 py-3 rounded-md font-medium shadow-md">
            Ver Todas as Soluções
          </Link>
        </div>
      </div>

      <style jsx>{`
        .magic-card-container {
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .magic-card {
          --mouse-x: 50%;
          --mouse-y: 50%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          transform-style: preserve-3d;
        }

        .magic-card:hover {
          transform: translateY(-5px) rotateX(calc(var(--mouse-y) * -0.05deg)) rotateY(calc(var(--mouse-x) * 0.05deg));
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .magic-card-reflection {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
          animation: reflectionAnimation 5s infinite;
        }

        .magic-card:hover .magic-card-reflection {
          animation: reflectionAnimation 2s infinite;
        }

        @keyframes reflectionAnimation {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(200%) translateY(200%) rotate(45deg);
          }
        }

        .magic-card-border {
          border: 2px solid transparent;
          background-origin: border-box;
          background-clip: content-box, border-box;
          background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
                            linear-gradient(90deg, rgba(248, 209, 77, 0) 0%, rgba(248, 209, 77, 0.4) 50%, rgba(248, 209, 77, 0) 100%);
          transition: all 0.3s ease;
        }

        .magic-card:hover .magic-card-border {
          background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
                            linear-gradient(90deg, rgba(248, 209, 77, 0.3) 0%, rgba(0, 71, 98, 0.6) 50%, rgba(248, 209, 77, 0.3) 100%);
        }

        .magic-card-glow {
          background: radial-gradient(
            circle at var(--mouse-x) var(--mouse-y),
            rgba(248, 209, 77, 0.4) 0%,
            rgba(248, 209, 77, 0.1) 40%,
            rgba(248, 209, 77, 0) 60%
          );
          transition: opacity 0.3s ease;
        }

        .magic-card:hover .magic-card-glow {
          opacity: 1;
        }
      `}</style>
    </section>;
};

export default Solutions;
