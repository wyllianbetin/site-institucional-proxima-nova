
import React, { useEffect, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallToAction from '@/components/common/CallToAction';
import { useLocation } from 'react-router-dom';
import SolutionHeader from '@/components/solutions/SolutionHeader';
import SolutionsOverview from '@/components/solutions/SolutionsOverview';
import SolutionSection from '@/components/solutions/SolutionSection';

const Solutions = () => {
  const location = useLocation();
  const consultingRef = useRef<HTMLDivElement>(null);
  const retailerRef = useRef<HTMLDivElement>(null);
  const sellerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle scroll to section based on URL hash
    const hash = location.hash;
    
    if (hash === '#consulting' && consultingRef.current) {
      setTimeout(() => {
        consultingRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (hash === '#digital-retailer' && retailerRef.current) {
      setTimeout(() => {
        retailerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (hash === '#seller-program' && sellerRef.current) {
      setTimeout(() => {
        sellerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  const scrollToConsulting = () => consultingRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToRetailer = () => retailerRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToSeller = () => sellerRef.current?.scrollIntoView({ behavior: 'smooth' });

  const consultingData = {
    id: "consulting",
    title: "Curso + Consultoria",
    description: [
      "Treinamento e consultoria para quem quer iniciar no Mercado Livre com suporte e acompanhamento durante 6 meses."
    ],
    features: [
      "Curso completo de Mercado Livre (ao vivo)", 
      "Consultoria individualizada com foco na prática", 
      "Diagnóstico da operação e plano de ação personalizado", 
      "Suporte e acompanhamento mensal durante 6 meses"
    ],
    buttonText: "Saiba mais",
    imageSrc: "/consultoria.jpg",
    imageAlt: "Strategic consulting session"
  };

  const retailerData = {
    id: "digital-retailer",
    title: "Programa Lojista Digital",
    description: [
      "Implementamos e cuidamos da operação de vendas online para empresas que não têm tempo, equipe ou experiência em marketplaces."
    ],
    features: [
      "Implantação completa da operação no Mercado Livre", 
      "Curso completo de Mercado Livre (ao vivo)", 
      "Ativação do termômetro", 
      "Conquista da medalha de Mercadolíder", 
      "Cadastro de anúncios (200 anúncios)",
      "Ativação da logística Flex e Full",
      "Armazenamento e Expedição de pedidos (optativo)",
      "Atendimento ao comprador (Pré e Pós-Venda)",
      "Gestão de campanhas de Ads",
      "Gestão completa da conta",
      "Garantia de resultado em contrato"
    ],
    buttonText: "Saiba mais",
    imageSrc: "/programa_lojista_digital.jpg",
    imageAlt: "Digital retailer working on marketplace"
  };

  const sellerData = {
    id: "seller-program",
    title: "Programa Seller",
    description: [
      "Aceleramos sellers que já vendem online, cuidando, otimizando e escalando os resultados no Mercado Livre."
    ],
    features: [
      "* Personalize os módulos conforme a sua necessidade",
      "Estratégia e Planejamento", 
      "Inteligência Comercial (Pesquisa de Mercado e Precificação)", 
      "Criação de Novos Anúncios", 
      "Revisão e Otimização de Anúncios Existentes", 
      "Gestão de Ads e Central de Promoções",
      "Gestão de Full",
      "Atendimento Pré-Venda",
      "Atendimento Pós-Venda",
      "Armazenamento e Expedição de Pedidos",
      "Consultoria + Suporte Técnico e Operacional",
      "Fechamento e Conciliação Financeira"
    ],
    buttonText: "Saiba mais",
    imageSrc: "/programa_seller.jpg",
    imageAlt: "Advanced seller operations"
  };

  return (
    <>
      <Header />
      <SolutionHeader />
      <SolutionsOverview 
        onScrollToConsulting={scrollToConsulting}
        onScrollToRetailer={scrollToRetailer}
        onScrollToSeller={scrollToSeller}
      />
      
      <SolutionSection 
        {...consultingData}
        innerRef={consultingRef}
      />
      
      <SolutionSection 
        {...retailerData}
        reverseLayout={true}
        innerRef={retailerRef}
      />
      
      <SolutionSection 
        {...sellerData}
        innerRef={sellerRef}
      />
      
      <CallToAction 
        title="Pronto para decolar o seu negócio?"
        buttonText="Fale com um especialista"
        buttonLink="/contact"
      />
      
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Solutions;
