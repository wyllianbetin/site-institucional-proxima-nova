import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallToAction from '@/components/common/CallToAction';
import { Layers, GraduationCap, Monitor, ClipboardCheck, Package2, Truck } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Ecosystem = () => {
  const ecosystemComponents = [{
    title: "Educação",
    icon: <GraduationCap className="h-5 w-5 text-proximanova-yellow" />,
    description: "Treinamos você e sua equipe para dominar as vendas online e crescer no digital.",
    features: ["Treinamento exclusivo para você e sua equipe", "Ao vivo: Presencial ou por vídeo chamada", "O curso contempla 10 Módulos", "Duração de 1h a 1:30h cada módulo", "Aulas semanais ou quinzenais"],
    extraContent: <div className="mt-6">
        <h4 className="font-semibold text-lg mb-4">Grade do Curso</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {["Módulo 1 - Ecossistema Meli", "Módulo 2 - Reputação e Indicadores", "Módulo 3 - Cadastro de Anúncios", "Módulo 4 - Pesquisa de Mercado", "Módulo 5 - Estratégias de Vendas", "Módulo 6 - O Algoritmo do Mercado Livre", "Módulo 7 - Pré-venda e Pós-venda", "Módulo 8 - Mercado Ads e Central de Promoções", "Módulo 9 - FULL", "Módulo 10 - Plataformas e Integradores"].map((module, i) => <div key={i} className="flex items-center p-2 bg-gray-50 rounded-md">
              <div className="bg-proximanova-blue/10 p-1.5 rounded-full mr-2">
                <div className="h-2 w-2 bg-proximanova-blue rounded-full"></div>
              </div>
              <span className="text-sm">{module}</span>
            </div>)}
        </div>
      </div>,
    imagePath: "/ecossistema_educacao.webp"
  }, {
    title: "Tecnologia",
    icon: <Monitor className="h-5 w-5 text-proximanova-yellow" />,
    description: "Conectamos e integramos seu negócio a sistemas inteligentes para controlar e escalar suas vendas.",
    features: ["Sistema de Controle de Estoque", "Sistema de Separação de Pedidos", "Sistema de Integração com Marketplaces", "Ferramenta de Pesquisa de Mercado", "Plataforma de Gerenciamento de Publicidade", "Plataforma de Automação de Atendimento", "Plataforma de Conciliação Financeira"],
    extraContent: <div className="mt-6">
        <h4 className="font-semibold text-lg mb-4">Empresas Parceiras</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({
          length: 6
        }).map((_, i) => <div key={i} className="bg-white rounded-lg overflow-hidden flex items-center justify-center p-4 border border-gray-100 shadow-sm">
              <img src={`/logoparceiro${i + 1}.png`} alt={`Logo Parceiro ${i + 1}`} className="max-w-full max-h-[60px] object-contain" onError={e => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
            target.alt = `Logo Parceiro ${i + 1} (não disponível)`;
          }} />
            </div>)}
        </div>
      </div>,
    imagePath: "/ecossistema_tecnologia.webp"
  }, {
    title: "Gestão",
    icon: <ClipboardCheck className="h-5 w-5 text-proximanova-yellow" />,
    description: "Planejamos estratégias e acompanhamos métricas para impulsionar seu crescimento.",
    features: ["Sessões de Planejamento Estratégico", "Elaboração de Diagnóstico e Plano de Ação", "Acompanhamento de Métricas e KPIs", "Identificação de Oportunidades de Crescimento", "Otimização de Processos", "Gerenciamento de Equipe e Demandas", "Fechamentos e Conciliação Financeira"],
    imagePath: "/ecossistema_gestao.webp"
  }, {
    title: "Operação",
    icon: <Layers className="h-5 w-5 text-proximanova-yellow" />,
    description: "Realizamos o cadastro, revisão e otimização de anúncios. Cuidamos do atendimento pré e pós-venda. Gerenciamos campanhas de Ads, Promoções e muito mais.",
    features: ["Cadastro de anúncios", "Revisão e otimização de anúncios", "Gestão de Catálogo", "Gestão de Ads", "Gestão de Promoções", "Gestão de FULL", "Gestão da Minha Página", "Atendimento Pré-Venda", "Atendimento Pós-Venda"],
    imagePath: "/ecossistema_operacao.webp"
  }, {
    title: "Armazenamento & Expedição",
    icon: <Package2 className="h-5 w-5 text-proximanova-yellow" />,
    description: "Cuidamos do armazenamento e da expedição dos seus pedidos com segurança, eficiência e agilidade.",
    features: ["Recebimento de Mercadorias", "Armazenamento Seguro", "Picking e Packing", "Gestão e Controle de Estoque", "Logística Reversa"],
    imagePath: "/ecossistema_expedicao.webp"
  }, {
    title: "Logística Flex e Full",
    icon: <Truck className="h-5 w-5 text-proximanova-yellow" />,
    description: "Oferecemos soluções de transporte para as modalidades Flex e Full, integrando sua logística.",
    features: ["Transporte aos Centros Logístico do Full (SP e SC)", "Logística de Envios Flex"],
    imagePath: "/ecossistema_logistica.webp"
  }];
  
  return <>
      <Header />
      
      {/* Page Header */}
      <div className="bg-proximanova-blue pt-32 pb-16 md:pt-36 md:pb-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Nosso Ecossistema</h1>
          <p className="text-xl max-w-3xl mx-auto mb-6">Uma abordagem completa para te atender de ponta a ponta.</p>
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
                <p>Na Próxima Nova, desenvolvemos uma metodologia única de ecossistema que inclui todos os aspectos do varejo digital. Em vez de focar em soluções isoladas, integramos educação, tecnologia, gestão, operações e logística para criar uma estrutura completa para o sucesso do seu marketplace.</p>
                <p>
                  Nosso ecossistema garante que seu negócio tenha todas as ferramentas, conhecimentos 
                  e suporte necessários para prosperar no ambiente digital, independentemente do seu ponto de partida.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {ecosystemComponents.map((component, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden group h-40">
                    <AspectRatio ratio={1/1} className="h-full">
                      <img 
                        src={component.imagePath} 
                        alt={component.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                        }}
                      />
                      <div className="absolute inset-0 bg-proximanova-blue/60 flex items-center justify-center p-4">
                        <h3 className="text-white text-center font-semibold text-lg">{component.title}</h3>
                      </div>
                    </AspectRatio>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <div className="inline-block bg-proximanova-blue text-white px-6 py-3 rounded-full text-sm font-medium">
                  Ecossistema Próxima Nova
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Components Detail Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-3">
              Componentes do Ecossistema
            </h2>
            <div className="h-1 w-20 bg-proximanova-yellow mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Explore cada componente do nosso ecossistema e descubra como podemos transformar seu negócio digital.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="accordion" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8 w-full">
                <TabsTrigger value="accordion">Visão Detalhada</TabsTrigger>
                <TabsTrigger value="cards">Visão em Cards</TabsTrigger>
              </TabsList>
              
              <TabsContent value="accordion" className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  {ecosystemComponents.map((component, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg overflow-hidden mb-4 border border-gray-200">
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex items-center">
                          <div className="bg-proximanova-blue/10 p-2 rounded-full mr-3">
                            {component.icon}
                          </div>
                          <span className="font-semibold text-xl text-proximanova-blue">{component.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="md:col-span-1">
                            <div className="relative rounded-lg overflow-hidden h-48">
                              <img 
                                src={component.imagePath} 
                                alt={component.title} 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                                }}
                              />
                            </div>
                          </div>
                          <div className="md:col-span-2">
                            <p className="text-gray-700 mb-6">{component.description}</p>
                            
                            <h4 className="font-semibold text-lg mb-3 text-proximanova-blue">Características</h4>
                            <ul className="space-y-2 mb-6">
                              {component.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start">
                                  <div className="bg-proximanova-yellow/20 p-1 rounded-full mr-2 mt-1">
                                    <div className="h-2 w-2 bg-proximanova-yellow rounded-full"></div>
                                  </div>
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            
                            {component.extraContent && component.extraContent}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="cards">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ecosystemComponents.map((component, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={component.imagePath} 
                          alt={component.title} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                          }}
                        />
                        <div className="absolute inset-0 bg-proximanova-blue/60 flex items-center justify-center">
                          <h3 className="text-white text-xl font-semibold">{component.title}</h3>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-proximanova-blue/10 p-2 rounded-full mr-3">
                            {component.icon}
                          </div>
                          <h3 className="font-semibold text-xl text-proximanova-blue">{component.title}</h3>
                        </div>
                        <p className="text-gray-700 mb-4">{component.description}</p>
                        <div className="space-y-2">
                          {component.features.slice(0, 3).map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start">
                              <div className="bg-proximanova-yellow/20 p-1 rounded-full mr-2 mt-1">
                                <div className="h-2 w-2 bg-proximanova-yellow rounded-full"></div>
                              </div>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                          {component.features.length > 3 && (
                            <div className="text-sm text-proximanova-blue font-medium mt-2">
                              + {component.features.length - 3} mais...
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <CallToAction title="Pronto para explorar nosso ecossistema?" buttonText="Solicite um orçamento" buttonLink="/contact" />
      
      <Footer />
      <WhatsAppButton />
    </>;
};

export default Ecosystem;
