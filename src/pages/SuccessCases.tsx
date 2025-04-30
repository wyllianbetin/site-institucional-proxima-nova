import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallToAction from '@/components/common/CallToAction';
import { Star, ArrowRight } from 'lucide-react';
const SuccessCases = () => {
  const successCases = [{
    name: "Casa do Chumbador",
    industry: "Construção",
    challenge: "A Casa do Chumbador é uma loja tradicional com décadas de atuação no mercado da construção civil, mas ainda não vendia através dos marketplaces. O desafio era iniciar as vendas no Mercado Livre do zero, validar o portifólio de produtos, tangibilizar as nuances técnicas dos itens para os anúncios, treinar a equipe interna e se posicionar com uma loja referência e especializada no nicho de fixações.",
    solution: "Programa Lojista Digital",
    results: ["Conquista da Medalha de Mercado Líder em 6 meses", "Selo Loja Oficial", "Ativação do Full", "Vendas todos os dias"],
    quote: "Sempre tivemos uma loja física muito forte, mas sabíamos que precisávamos entrar no mundo digital. A Próxima Nova nos ajudou a estruturar tudo. Em poucos meses, conquistamos a medalha de MercadoLíder e estamos expandindo nossa operação graças ao trabalho deles.",
    person: "Sócrates, sócio e gestor",
    image: "https://raw.githubusercontent.com/wyllianbetin/site-institucional-proxima-nova/refs/heads/main/public/casodesucesso_casadochumbador.webp"
  }, {
    name: "Home Decor Shop",
    industry: "Casa & Decoração",
    challenge: "Um negócio de decoração para casa com produtos de alta qualidade, mas alcance de mercado limitado e flutuações sazonais nas vendas.",
    solution: "Consultoria Estratégica seguida pela inscrição no Programa Seller.",
    results: ["450% de crescimento ano a ano na receita online", "Suavização das vendas sazonais através de planejamento estratégico", "Catálogo de produtos expandido de 50 para 200 itens"],
    quote: "Os insights estratégicos fornecidos pela Próxima Nova nos ajudaram a identificar e capturar oportunidades que nunca soubemos que existiam.",
    person: "João Mendes, Fundador",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
  }, {
    name: "Fashion Outlet",
    industry: "Moda & Vestuário",
    challenge: "Um varejista de moda enfrentando dificuldades com gerenciamento de estoque e altas taxas de devolução para vendas online.",
    solution: "Abordagem de ecossistema com foco nos componentes de Operações e Tecnologia.",
    results: ["40% de redução nas taxas de devolução através de anúncios aprimorados", "Giro de estoque aumentado em 60%", "Pontuação de satisfação do cliente melhorada de 3,2/5 para 4,8/5"],
    quote: "As soluções tecnológicas e o suporte operacional transformaram a forma como gerenciamos nosso negócio online, tornando-o muito mais eficiente e lucrativo.",
    person: "Ana Costa, Gerente de Operações",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  }];
  return <>
      <Header />
      
      {/* Page Header */}
      <div className="bg-proximanova-blue pt-32 pb-16 md:pt-36 md:pb-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Casos de Sucesso</h1>
          
          <div className="h-1 w-24 bg-proximanova-yellow mx-auto"></div>
        </div>
      </div>
      
      {/* Success Cases Overview */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-proximanova-blue/10 p-3 rounded-full mr-4">
                <Star className="h-6 w-6 text-proximanova-blue" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue">Histórias de Sucesso</h2>
            </div>
            <div className="h-1 w-16 bg-proximanova-yellow mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">Descubra como empresas de diferentes setores alcançaram resultados notáveis ​​implementando nossas soluções de transformação digital.</p>
          </div>
          
          {/* Success Cases */}
          {successCases.map((caseStudy, index) => <div key={index} className={`mb-24 ${index !== successCases.length - 1 ? "border-b border-gray-200 pb-24" : ""}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 !== 0 ? "order-2 lg:order-1" : ""}>
                  <div className="bg-proximanova-blue/5 rounded-lg p-1">
                    <div className="relative h-72 md:h-96 rounded overflow-hidden">
                      <img src={caseStudy.image} alt={caseStudy.name} className="absolute w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 !== 0 ? "order-1 lg:order-2" : ""}>
                  <div className="inline-block bg-gray-100 text-proximanova-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
                    {caseStudy.industry}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">{caseStudy.name}</h3>
                  <div className="h-1 w-12 bg-proximanova-yellow mb-6"></div>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold mb-2">O Desafio:</h4>
                      <p className="text-gray-700">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Nossa Solução:</h4>
                      <p className="text-gray-700">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Os Resultados:</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, i) => <li key={i} className="flex items-start">
                            <div className="bg-proximanova-yellow p-1 rounded-full mr-3 mt-1">
                              <div className="h-2 w-2 bg-proximanova-blue rounded-full"></div>
                            </div>
                            <span className="text-gray-700">{result}</span>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 border-l-4 border-proximanova-yellow p-6 rounded-r-lg mb-6">
                    <p className="text-gray-700 italic mb-3">"{caseStudy.quote}"</p>
                    <p className="font-medium text-proximanova-blue">{caseStudy.person}</p>
                  </div>
                  
                  <button className="flex items-center text-proximanova-blue hover:text-proximanova-yellow transition-colors font-medium">
                    Ver caso completo
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </section>
      
      {/* Metrics Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-8 text-center">
            Métricas de Impacto
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-4xl font-bold text-proximanova-blue mb-4">300+</div>
              <p className="text-gray-700">Negócios Transformados</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-4xl font-bold text-proximanova-blue mb-4">230%</div>
              <p className="text-gray-700">Média de Crescimento em Vendas</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-4xl font-bold text-proximanova-blue mb-4">85%</div>
              <p className="text-gray-700">Taxa de Retenção de Clientes</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-4xl font-bold text-proximanova-blue mb-4">4.8/5</div>
              <p className="text-gray-700">Satisfação dos Clientes</p>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction title="Pronto para se tornar nosso próximo caso de sucesso?" buttonText="Comece agora" buttonLink="/contact" />
      
      <Footer />
      <WhatsAppButton />
    </>;
};
export default SuccessCases;
