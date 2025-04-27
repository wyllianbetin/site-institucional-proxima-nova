import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallToAction from '@/components/common/CallToAction';
import { Check } from 'lucide-react';

const About = () => {
  const differentials = [
    "Ecossistema único no Brasil", 
    "Especializado em marketplaces",
    "Mais de 11 anos de expertise em vendas online",
    "Soluções personalizadas para cada estágio do negócio",
    "Suporte completo da estratégia à execução",
    "Foco em crescimento sustentável e lucrativo"
  ];

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="bg-proximanova-blue pt-32 pb-16 md:pt-36 md:pb-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Sobre a Próxima Nova</h1>
          <div className="h-1 w-24 bg-proximanova-yellow mx-auto"></div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">Nossa História</h2>
              <div className="h-1 w-16 bg-proximanova-yellow mb-6"></div>
              <div className="space-y-4 text-gray-700">
                <p>
                  A Próxima Nova foi fundada em 2012 com uma missão clara: ajudar varejistas 
                  físicos a navegar com sucesso na jornada de transformação digital. O que começou 
                  como uma pequena consultoria cresceu e se tornou o principal ecossistema do 
                  Brasil para o sucesso em marketplaces.
                </p>
                <p>
                  Ao longo dos anos, trabalhamos com centenas de varejistas de todos os portes, 
                  ajudando-os a estabelecer, crescer e otimizar sua presença online. Nosso foco 
                  sempre foi criar crescimento sustentável através de planejamento estratégico e 
                  excelência operacional.
                </p>
                <p>
                  Hoje, a Próxima Nova oferece um conjunto completo de soluções projetadas para 
                  abordar todos os aspectos do varejo digital, desde educação e tecnologia até 
                  gestão e operações.
                </p>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Próxima Nova team at work" 
                className="absolute w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Purpose Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">Nosso Propósito</h2>
            <div className="h-1 w-16 bg-proximanova-yellow mx-auto mb-6"></div>
            <p className="text-xl font-medium text-gray-700 max-w-3xl mx-auto">
              Capacitar o varejo físico para prosperar no ambiente digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-proximanova-blue mb-3">Missão</h3>
              <p className="text-gray-700">
                Fornecer aos varejistas o conhecimento, as ferramentas e o suporte necessários 
                para ter sucesso no marketplace digital.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-semibold text-proximanova-blue mb-3">Visão</h3>
              <p className="text-gray-700">
                Ser o principal parceiro de transformação digital para empresas varejistas em 
                toda a América Latina.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-proximanova-blue mb-3">Valores</h3>
              <p className="text-gray-700">
                Excelência, Inovação, Parceria, Transparência e Foco em Resultados.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Differentials Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">Diferenciais</h2>
          <div className="h-1 w-16 bg-proximanova-yellow mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {differentials.map((differential, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-proximanova-blue/10 p-2 rounded-full mr-4 mt-1">
                  <Check className="h-4 w-4 text-proximanova-blue" />
                </div>
                <p className="text-gray-700">{differential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Quer saber mais sobre como podemos ajudar seu negócio?"
        buttonText="Entre em contato"
        buttonLink="/contact"
      />
      
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default About;
