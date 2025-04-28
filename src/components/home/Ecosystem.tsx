import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Ecosystem = () => {
  const ecosystemComponents = [{
    title: "Educação",
    description: "Treinamentos práticos e cursos para sucesso no marketplace.",
    icon: "🎓"
  }, {
    title: "Tecnologia",
    description: "Ferramentas de gestão de vendas, anúncios e estoque.",
    icon: "💻"
  }, {
    title: "Gestão",
    description: "Estratégias de crescimento e monitoramento de KPIs.",
    icon: "📋"
  }, {
    title: "Operações",
    description: "Suporte para envios, atendimento, anúncios e publicidade.",
    icon: "⚙️"
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
          <p className="text-lg max-w-3xl mx-auto text-gray-700">Na Próxima Nova, desenvolvemos um ecossistema completo para atender nossos clientes em todas as etapas da operação de vendas online.

Nosso ecossistema reúne: Educação, Tecnologia, Gestão, Operação e Logística.

Terceirize a rotina das vendas online e foque no que realmente importa: levar o seu negócio para o próximo nível.
Deixe a parte operacional — o trabalho chato — com a gente.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ecosystemComponents.map((component, index) => <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">{component.icon}</div>
              <h3 className="text-xl font-semibold text-proximanova-blue mb-2">{component.title}</h3>
              <p className="text-gray-600">{component.description}</p>
            </div>)}
        </div>

        <div className="text-center">
          <Link to="/ecosystem" className="inline-flex items-center gap-2 text-proximanova-blue font-medium hover:text-proximanova-yellow transition-colors">
            Saiba mais sobre nosso ecossistema
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>;
};
export default Ecosystem;