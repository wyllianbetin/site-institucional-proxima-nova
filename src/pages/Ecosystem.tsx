
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
    features: ["Hands-on marketplace workshops", "Online training courses", "Regular update webinars", "Custom training for your team", "Certification programs"]
  }, {
    title: "Tecnologia",
    icon: "💻",
    description: "Conectamos e integramos seu negócio a sistemas inteligentes para controlar e escalar suas vendas.",
    features: ["Inventory management systems", "Marketplace integration tools", "Sales analytics dashboards", "Advertising management platforms", "Customer service automation"]
  }, {
    title: "Gestão",
    icon: "📋",
    description: "Planejamos estratégias e acompanhamos métricas para impulsionar seu crescimento.",
    features: ["Strategic planning sessions", "KPI development and tracking", "Growth opportunity identification", "Process optimization", "Regular performance reviews"]
  }, {
    title: "Operação",
    icon: "⚙️",
    description: "Realizamos o cadastro, revisão e otimização de anúncios. Cuidamos do atendimento pré e pós-venda. Gerenciamos campanhas de Ads, Promoções e muito mais.",
    features: ["Shipping logistics support", "Customer service excellence", "Product listing optimization", "Advertising campaign management", "Conflict resolution assistance"]
  }, {
    title: "Armazenamento & Expedição",
    icon: "📦",
    description: "Cuidamos do armazenamento e da expedição dos seus pedidos com segurança, eficiência e agilidade.",
    features: ["Secure product warehousing", "Efficient order fulfillment", "Fast shipping services", "Inventory tracking", "Returns management"]
  }, {
    title: "Logística Flex e Full",
    icon: "🚚",
    description: "Oferecemos soluções de transporte para as modalidades Flex e Full, integrando sua logística.",
    features: ["Flex and Full transportation solutions", "Logistics integration", "Fast delivery options", "Efficient package tracking", "Cost-effective shipping"]
  }, {
    title: "Community",
    icon: "👥",
    description: "Join our exclusive community of retailers and marketplace experts. Share experiences, learn from peers, and stay updated on the latest marketplace trends and strategies through our regular events, online forums, and networking opportunities.",
    features: ["Exclusive retailer groups", "Industry networking events", "Expert roundtables", "Knowledge sharing platforms", "Annual marketplace conference"]
  }];
  
  return <>
      <Header />
      
      {/* Page Header */}
      <div className="bg-proximanova-blue pt-32 pb-16 md:pt-36 md:pb-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Nosso Ecossistema</h1>
          <p className="text-xl max-w-3xl mx-auto mb-6">
            A comprehensive approach to digital transformation that covers all aspects of marketplace success.
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
                <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue">Complete Ecosystem</h2>
              </div>
              <div className="h-1 w-16 bg-proximanova-yellow mb-6"></div>
              <div className="space-y-4 text-gray-700">
                <p>
                  At Próxima Nova, we've developed a unique ecosystem approach that addresses 
                  all aspects of digital retail. Rather than focusing on isolated solutions, 
                  we integrate education, technology, management, operations, and community to 
                  create a comprehensive framework for marketplace success.
                </p>
                <p>
                  Our ecosystem ensures that your business has all the necessary tools, knowledge, 
                  and support to thrive in the digital environment, regardless of your starting point.
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
                    Próxima Nova Ecosystem
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
              <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue">Detailed Components</h2>
            </div>
            <div className="h-1 w-16 bg-proximanova-yellow mx-auto mb-6"></div>
            <p className="text-gray-700">
              Explore each component of our ecosystem to understand how they work together 
              to drive your digital transformation journey.
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
                    <h3 className="font-semibold text-lg">Key Features:</h3>
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
