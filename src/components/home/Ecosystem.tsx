import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Ecosystem = () => {
  const ecosystemComponentsTop = [{
    title: "Educação",
    description: "Treinamos você e sua equipe para dominar as vendas online e crescer no digital.",
    icon: "🎓",
    imagePath: "/ecossistema_educacao.webp"
  }, {
    title: "Tecnologia",
    description: "Conectamos e integramos seu negócio a sistemas inteligentes para controlar e escalar suas vendas.",
    icon: "💻",
    imagePath: "/ecossistema_tecnologia.webp"
  }, {
    title: "Gestão",
    description: "Planejamos estratégias e acompanhamos métricas para impulsionar seu crescimento.",
    icon: "📋",
    imagePath: "/ecossistema_gestao.webp"
  }];
  
  const ecosystemComponentsBottom = [{
    title: "Operação",
    description: "Realizamos o cadastro, revisão e otimização de anúncios. Cuidamos do atendimento pré e pós-venda. Gerenciamos campanhas de Ads, Promoções e muito mais.",
    icon: "⚙️",
    imagePath: "/ecossistema_operacao.webp"
  }, {
    title: "Armazenamento & Expedição",
    description: "Cuidamos do armazenamento e da expedição dos seus pedidos com segurança, eficiência e agilidade.",
    icon: "📦",
    imagePath: "/ecossistema_expedicao.webp"
  }, {
    title: "Logística Flex e Full",
    description: "Oferecemos soluções de transporte para as modalidades Flex e Full, integrando sua logística.",
    icon: "🚚",
    imagePath: "/ecossistema_logistica.webp"
  }];

  return <section className="section bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-proximanova-blue/10 p-3 rounded-full mb-4">
            <Layers className="h-6 w-6 text-proximanova-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-3">
            Ecossistema Próxima Nova
          </h2>
          <div className="h-1 w-20 bg-proximanova-yellow mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">Desenvolvemos um ecossistema completo para atender nossos clientes de ponta a ponta.
Terceirize a rotina das vendas online e foque no que realmente importa: levar o seu negócio para o próximo nível. Deixe a parte operacional com a gente.</p>
        </div>

        {/* Top row of ecosystem components */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {ecosystemComponentsTop.map((component, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden h-48 group">
              <AspectRatio ratio={16/9} className="h-full">
                <img 
                  src={component.imagePath} 
                  alt={component.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                  }}
                />
                <div className="absolute inset-0 bg-proximanova-blue/70 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{component.title}</h3>
                  <p className="text-white/90 text-sm hidden md:block">{component.description}</p>
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>

        {/* Bottom row of ecosystem components */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {ecosystemComponentsBottom.map((component, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden h-48 group">
              <AspectRatio ratio={16/9} className="h-full">
                <img 
                  src={component.imagePath} 
                  alt={component.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                  }}
                />
                <div className="absolute inset-0 bg-proximanova-blue/70 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{component.title}</h3>
                  <p className="text-white/90 text-sm hidden md:block">{component.description}</p>
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/ecosystem" className="inline-flex items-center gap-2 bg-proximanova-blue text-white px-6 py-3 rounded-md hover:bg-proximanova-blue/90 transition-colors">
            Ver detalhes do ecossistema
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>;
};

export default Ecosystem;
