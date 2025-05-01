import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallToAction from '@/components/common/CallToAction';
import { Star, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';

const SuccessCases = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const successCases = [{
    name: "Casa do Chumbador",
    industry: "Construção",
    challenge: "A Casa do Chumbador é uma loja tradicional com décadas de atuação no mercado da construção civil, mas ainda não vendia através dos marketplaces. O desafio era iniciar as vendas no Mercado Livre do zero, validar o portifólio de produtos, tangibilizar as nuances técnicas dos itens para os anúncios, treinar a equipe interna e se posicionar com uma loja referência e especializada no nicho de fixações.",
    solution: "Programa Lojista Digital",
    results: ["Conquista da Medalha de Mercado Líder em 6 meses", "Selo Loja Oficial", "Ativação do Full", "Vendas todos os dias"],
    quote: "Sempre tivemos uma loja física muito forte, mas sabíamos que precisávamos entrar no mundo digital. A Próxima Nova nos ajudou a estruturar tudo. Em poucos meses, conquistamos a medalha de MercadoLíder e estamos expandindo nossa operação graças ao trabalho deles.",
    person: "Sócrates, sócio e gestor",
    image: "https://raw.githubusercontent.com/wyllianbetin/site-institucional-proxima-nova/refs/heads/main/public/casodesucesso_casadochumbador.webp",
    url: "https://www.mercadolivre.com.br/loja/casa-do-chumbador"
  }, {
    name: "Fatelli",
    industry: "Marcenaria",
    challenge: "A Fatelli é uma loja especializada em produtos para marcenaria, com forte atuação no mercado físico. O principal desafio era validar o Mercado Livre como um canal de vendas viável, partindo do zero, com necessidade de entender a demanda, a curva ABC, os processos rotineiros e a conexão com ERP e HUB.",
    solution: "Programa Lojista Digital",
    results: ["Conquista da Medalha de Mercado Líder em 6 meses", "Validação do Canal", "Validação da Curva ABC", "Implementação de HUB", "Ativação do Full", "Vendas todos os dias"],
    quote: "Começamos sem nenhuma venda e, em poucos meses, já estávamos faturando diariamente no Mercado Livre. A Próxima Nova não ficou só na teoria: entrou no dia a dia da operação e realmente fez acontecer. Hoje temos uma operação organizada, enxuta e com escalabilidade.",
    person: "Tiago, sócio e gestor",
    image: "https://raw.githubusercontent.com/wyllianbetin/site-institucional-proxima-nova/refs/heads/main/public/casodesucesso_fatelli.webp",
    url: "https://www.mercadolivre.com.br/pagina/fatelli"
  }, {
    name: "Top Spin",
    industry: "Sublimação",
    challenge: "A Top Spin já atuava no Mercado Livre com vendas recorrentes no segmento de sublimação, mas enfrentava dificuldades para escalar a operação. Os anúncios não estavam otimizados, os custos com Ads eram altos e a estrutura interna carecia de processos e integração tecnológica. O desafio era profissionalizar a gestão, otimizar a publicidade e aumentar a lucratividade da operação juntamente com a escala de vendas.",
    solution: "Programa Seller",
    results: ["Conquista da Medalha de MercadoLíder GOLD", "Implementação de ERP", "Otimização das campanhas de ADS", "Gestão de FULL", "Aumento de Receita e Margem"],
    quote: "Já vendíamos no Mercado Livre, mas nossos resultados ainda eram baixos. Tínhamos muito gasto com Ads e pouco retorno. Através da parceria com a Próxima Nova, conseguimos escalar nossas vendas e otimizar os investimentos em publicidade.",
    person: "Rodrigo, Sócio Fundador",
    image: "https://raw.githubusercontent.com/wyllianbetin/site-institucional-proxima-nova/refs/heads/main/public/casodesucesso_topspin.webp",
    url: "https://www.mercadolivre.com.br/pagina/topspin"
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
            <p className="text-gray-700 max-w-3xl mx-auto">Confira como empresas de diferentes setores alcançaram resultados notáveis ​​implementando nossas soluções de transformação digital.</p>
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
                  
                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" className="flex items-center text-proximanova-blue hover:text-proximanova-yellow transition-colors" asChild>
                      <a href={caseStudy.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Confira a página do vendedor no Mercado Livre
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
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
              <div className="text-4xl font-bold text-proximanova-blue mb-4">60+</div>
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
