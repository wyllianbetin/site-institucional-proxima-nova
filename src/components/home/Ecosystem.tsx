import React, { useState } from 'react';
import { Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

const Ecosystem = () => {
  const [activeComponent, setActiveComponent] = useState<number | null>(null);
  
  const ecosystemComponents = [{
    title: "Educação",
    description: "Treinamos você e sua equipe para dominar as vendas online e crescer no digital.",
    imagePath: "/ecossistema_educacao.webp"
  }, {
    title: "Tecnologia",
    description: "Conectamos e integramos seu negócio a sistemas inteligentes para controlar e escalar suas vendas.",
    imagePath: "/ecossistema_tecnologia.webp"
  }, {
    title: "Gestão",
    description: "Planejamos estratégias e acompanhamos métricas para impulsionar seu crescimento.",
    imagePath: "/ecossistema_gestao.webp"
  }, {
    title: "Operação",
    description: "Realizamos o cadastro, revisão e otimização de anúncios. Cuidamos do atendimento pré e pós-venda. Gerenciamos campanhas de Ads, Promoções e muito mais.",
    imagePath: "/ecossistema_operacao.webp"
  }, {
    title: "Armazenamento & Expedição",
    description: "Cuidamos do armazenamento e da expedição dos seus pedidos com segurança, eficiência e agilidade.",
    imagePath: "/ecossistema_expedicao.webp"
  }, {
    title: "Logística\nFlex e Full",
    description: "Oferecemos soluções de transporte para as modalidades Flex e Full.",
    imagePath: "/ecossistema_logistica.webp"
  }];

  // Function to calculate positions in a circle
  const calculatePosition = (index: number, totalItems: number, radius: number) => {
    const angle = Math.PI * 2 / totalItems * index - Math.PI / 2;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return {
      x,
      y
    };
  };

  return <section className="section py-16 md:py-24 bg-proximanova-yellow">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-4">
          <div className="p-3 rounded-full mb-4 bg-white/[0.78]">
            <Layers className="h-6 w-6 text-proximanova-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-3">
            Ecossistema Próxima Nova
          </h2>
          <div className="h-1 w-20 bg-proximanova-yellow mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-proximanova-blue">Desenvolvemos um ecossistema completo para atender nossos clientes de ponta a ponta. Todas as etapas de uma operação de e-commerce centralizadas em um único parceiro. Terceirize a rotina das vendas online e foque no que realmente importa: levar o seu negócio para o próximo nível. Deixe a parte operacional com a gente.</p>
        </div>

        {/* Circular layout for desktop */}
        <div className="hidden md:block relative mb-4">
          <div className="relative w-full max-w-4xl mx-auto aspect-square">
            {/* Central logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-proximanova-blue rounded-full p-6 shadow-lg z-10 w-52 h-52 flex items-center justify-center">
              <img src="/logo-white.svg" alt="Próxima Nova" className="w-44 h-44 object-contain" />
            </div>

            {/* Connection lines using SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              {/* Lines connecting components to center */}
              {ecosystemComponents.map((_, index) => {
              const {
                x,
                y
              } = calculatePosition(index, ecosystemComponents.length, 30);
              return <line 
                key={index} 
                x1="50" 
                y1="50" 
                x2={50 + x} 
                y2={50 + y} 
                stroke={activeComponent === index ? "#004762" : "#00476280"} 
                strokeWidth="0.5" 
                strokeDasharray={activeComponent === index ? "none" : "1,1"} 
                className="transition-all duration-300" 
              />;
            })}
            </svg>

            {/* Component cards positioned around the circle */}
            {ecosystemComponents.map((component, index) => {
            const {
              x,
              y
            } = calculatePosition(index, ecosystemComponents.length, 30);
            return <div 
                key={index} 
                className={`absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 w-[24%] aspect-square rounded-full overflow-hidden shadow-md group ${activeComponent === index ? 'scale-110 z-20 shadow-xl' : activeComponent !== null ? 'opacity-70' : ''}`} 
                style={{
                  left: `calc(50% + ${x}%)`,
                  top: `calc(50% + ${y}%)`
                }} 
                onMouseEnter={() => setActiveComponent(index)} 
                onMouseLeave={() => setActiveComponent(null)}
              >
                  <Card className="w-full h-full rounded-full overflow-hidden border-4 border-white hover:border-proximanova-blue transition-all duration-300">
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <div className="absolute inset-0">
                        <img 
                          src={component.imagePath} 
                          alt={component.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                          onError={e => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                          }} 
                        />
                        <div className="absolute inset-0 bg-proximanova-blue/60 group-hover:bg-proximanova-blue/80 transition-colors duration-300"></div>
                      </div>
                      <div className="relative z-10 text-white text-center p-2 md:p-3 flex flex-col justify-center h-full">
                        <h3 className="text-base font-bold whitespace-pre-wrap">{component.title}</h3>
                        <p className="text-xs md:text-[0.7rem] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{component.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>;
          })}
          </div>
        </div>

        {/* Mobile version with grid layout */}
        <div className="md:hidden grid grid-cols-2 gap-4 mb-10">
          {ecosystemComponents.map((component, index) => <div key={index} className="relative rounded-lg overflow-hidden aspect-square shadow-md">
              <div className="relative h-full w-full">
                <img src={component.imagePath} alt={component.title} className="absolute inset-0 w-full h-full object-cover" onError={e => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
            }} />
                <div className="absolute inset-0 bg-proximanova-blue/70 flex flex-col items-center justify-center p-3 text-center">
                  <h3 className="text-sm font-bold text-white whitespace-pre-wrap">{component.title}</h3>
                </div>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-2">
          <Link to="/ecosystem" className="inline-flex items-center gap-2 bg-proximanova-blue text-white px-6 py-3 rounded-md hover:bg-proximanova-blue/90 transition-colors">
            Saiba mais sobre nosso ecossistema
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>;
};

export default Ecosystem;
