
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallToAction from '@/components/common/CallToAction';
import { Book, Layers } from 'lucide-react';

const Ecosystem = () => {
  const ecosystemComponents = [{
    title: "Educação",
    icon: "🎓",
    description: "Treinamos você e sua equipe para dominar as vendas online e crescer no digital.",
    features: ["Workshops práticos de marketplace", "Cursos de treinamento online", "Webinars regulares de atualização", "Treinamento personalizado para sua equipe", "Programas de certificação"]
  }, {
    title: "Tecnologia",
    icon: "💻",
    description: "Conectamos e integramos seu negócio a sistemas inteligentes para controlar e escalar suas vendas.",
    features: ["Sistemas de gerenciamento de estoque", "Ferramentas de integração com marketplaces", "Painéis de análise de vendas", "Plataformas de gerenciamento de publicidade", "Automação de atendimento ao cliente"]
  }, {
    title: "Gestão",
    icon: "📋",
    description: "Planejamos estratégias e acompanhamos métricas para impulsionar seu crescimento.",
    features: ["Sessões de planejamento estratégico", "Desenvolvimento e acompanhamento de KPIs", "Identificação de oportunidades de crescimento", "Otimização de processos", "Revisões regulares de desempenho"]
  }, {
    title: "Operação",
    icon: "⚙️",
    description: "Realizamos o cadastro, revisão e otimização de anúncios. Cuidamos do atendimento pré e pós-venda. Gerenciamos campanhas de Ads, Promoções e muito mais.",
    features: ["Suporte à logística de envios", "Excelência no atendimento ao cliente", "Otimização de listagem de produtos", "Gerenciamento de campanhas publicitárias", "Assistência na resolução de conflitos"]
  }, {
    title: "Armazenamento & Expedição",
    icon: "📦",
    description: "Cuidamos do armazenamento e da expedição dos seus pedidos com segurança, eficiência e agilidade.",
    features: ["Armazenamento seguro de produtos", "Eficiência no processamento de pedidos", "Serviços rápidos de envio", "Rastreamento de estoque", "Gerenciamento de devoluções"]
  }, {
    title: "Logística Flex e Full",
    icon: "🚚",
    description: "Oferecemos soluções de transporte para as modalidades Flex e Full, integrando sua logística.",
    features: ["Soluções de transporte Flex e Full", "Integração logística", "Opções de entrega rápida", "Rastreamento eficiente de pacotes", "Envio com custo-benefício"]
  }, {
    title: "Comunidade",
    icon: "👥",
    description: "Junte-se à nossa comunidade exclusiva de lojistas e especialistas em marketplace. Compartilhe experiências, aprenda com seus pares e mantenha-se atualizado sobre as últimas tendências e estratégias de marketplace através de nossos eventos regulares, fóruns online e oportunidades de networking.",
    features: ["Grupos exclusivos para lojistas", "Eventos de networking do setor", "Mesas redondas com especialistas", "Plataformas de compartilhamento de conhecimento", "Conferência anual de marketplace"]
  }];
  
  return <>
      <Header />
      
      {/* Page Header */}
      <div className="bg-proximanova-blue pt-32 pb-16 md:pt-36 md:pb-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Nosso Ecossistema</h1>
          <p className="text-xl max-w-3xl mx-auto mb-6">
            Uma abordagem abrangente para transformação digital que cobre todos os aspectos do sucesso no marketplace.
          </p>
          <div className="h-1 w-24 bg-proximanova-yellow mx-auto"></div>
        </div>
      </div>
      
      {/* Ecosystem Overview */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-proximanova-blue/10 p-3 rounded-full mr-4">
                  <Layers className="h-6 w-6 text-proximanova-blue" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue">Ecossistema Completo</h2>
              </div>
              <div className="h-1 w-16 bg-proximanova-yellow mb-6"></div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Na Próxima Nova, desenvolvemos uma abordagem única de ecossistema que aborda 
                  todos os aspectos do varejo digital. Em vez de focar em soluções isoladas, 
                  integramos educação, tecnologia, gestão, operações e comunidade para 
                  criar uma estrutura abrangente para o sucesso no marketplace.
                </p>
                <p>
                  Nosso ecossistema garante que seu negócio tenha todas as ferramentas, conhecimentos 
                  e suporte necessários para prosperar no ambiente digital, independentemente do seu ponto de partida.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg bg-gray-50 p-8">
              <div className="flex flex-wrap justify-center gap-4">
                {ecosystemComponents.slice(0, 6).map((component, index) => <div key={index} className="bg-white rounded-lg shadow-sm p-4 text-center flex flex-col items-center w-40">
                    <div className="text-3xl mb-2">{component.icon}</div>
                    <h3 className="font-medium text-proximanova-blue">{component.title}</h3>
                  </div>)}
                <div className="w-full text-center mt-4">
                  <div className="inline-block bg-proximanova-blue text-white px-6 py-3 rounded-full text-sm font-medium">
                    Ecossistema Próxima Nova
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-proximanova-blue/10 p-3 rounded-full mr-4">
                <Book className="h-6 w-6 text-proximanova-blue" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue">Componentes Detalhados</h2>
            </div>
            <div className="h-1 w-16 bg-proximanova-yellow mx-auto mb-6"></div>
            <p className="text-gray-700">
              Explore cada componente do nosso ecossistema para entender como eles trabalham juntos 
              para impulsionar sua jornada de transformação digital.
            </p>
          </div>
        </div>
      </section>
      
      {/* Detailed Components */}
      {ecosystemComponents.map((component, index) => <section key={index} className={`section ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 !== 0 ? "order-2 md:order-1" : ""}>
                <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                  <div className="text-5xl mb-6">{component.icon}</div>
                  <h2 className="text-2xl font-bold text-proximanova-blue mb-4">{component.title}</h2>
                  <div className="h-1 w-12 bg-proximanova-yellow mb-6"></div>
                  <p className="text-gray-700 mb-8">{component.description}</p>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Principais Características:</h3>
                    <ul className="space-y-2">
                      {component.features.map((feature, i) => <li key={i} className="flex items-start">
                          <div className="bg-proximanova-blue/10 p-1 rounded-full mr-3 mt-1">
                            <div className="h-2 w-2 bg-proximanova-blue rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className={index % 2 !== 0 ? "order-1 md:order-2" : ""}>
                <div className="aspect-square relative rounded-lg shadow-xl overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-148${index + 1}925895917-afdab827c52f`} alt={component.title} className="absolute w-full h-full object-cover" onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
              }} />
                  <div className="absolute inset-0 bg-proximanova-blue/5"></div>
                </div>
              </div>
            </div>
          </div>
        </section>)}
      
      <CallToAction title="Pronto para explorar nosso ecossistema?" buttonText="Solicite uma reunião" buttonLink="/contact" />
      
      <Footer />
      <WhatsAppButton />
    </>;
};

export default Ecosystem;
