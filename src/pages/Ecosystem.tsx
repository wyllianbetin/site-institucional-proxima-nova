import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CallToAction from '@/components/common/CallToAction';
import { Layers, GraduationCap, Monitor, ClipboardCheck, Package2, Truck } from 'lucide-react';
import EcosystemHeader from '@/components/ecosystem/EcosystemHeader';
import EcosystemOverview from '@/components/ecosystem/EcosystemOverview';
import EcosystemDetailComponents from '@/components/ecosystem/EcosystemDetailComponents';
import { EcosystemComponentType } from '@/types/ecosystem';
import { useLocation } from 'react-router-dom';

const Ecosystem = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const ecosystemComponents: EcosystemComponentType[] = [{
    id: "educacao",
    title: "Educação",
    icon: <GraduationCap className="h-6 w-6 text-proximanova-blue" />,
    description: "Treinamos você e sua equipe para dominar as vendas online e crescer no digital.",
    features: ["Treinamento exclusivo para você e sua equipe", "Ao vivo: Presencial ou por vídeo chamada", "O curso contempla 10 Módulos", "Duração de 1h a 1:30h cada módulo", "Aulas semanais ou quinzenais"],
    extraContent: <div className="mt-6">
        <h4 className="font-semibold text-lg mb-4">Grade do Curso</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {["Módulo 1 - Ecossistema Meli", "Módulo 2 - Reputação e Indicadores", "Módulo 3 - Cadastro de Anúncios", "Módulo 4 - Pesquisa de Mercado", "Módulo 5 - Estratégias de Vendas", "Módulo 6 - O Algoritmo do Mercado Livre", "Módulo 7 - Pré-venda e Pós-venda", "Módulo 8 - Mercado Ads e Central de Promoções", "Módulo 9 - FULL", "Módulo 10 - Plataformas e Integradores"].map((module, i) => <div key={i} className="flex items-center p-2 bg-gray-50 rounded-md">
              <div className="bg-proximanova-yellow/10 p-1.5 rounded-full mr-2">
                <div className="h-2 w-2 bg-proximanova-yellow rounded-full"></div>
              </div>
              <span className="text-sm">{module}</span>
            </div>)}
        </div>
      </div>,
    imagePath: "/ecossistema_educacao.webp"
  }, {
    title: "Tecnologia",
    id: "tecnologia",
    icon: <Monitor className="h-6 w-6 text-proximanova-blue" />,
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
    id: "gestao",
    title: "Gestão",
    icon: <ClipboardCheck className="h-6 w-6 text-proximanova-blue" />,
    description: "Planejamos estratégias e acompanhamos métricas para impulsionar seu crescimento.",
    features: ["Sessões de Planejamento Estratégico", "Elaboração de Diagnóstico e Plano de Ação", "Acompanhamento de Métricas e KPIs", "Identificação de Oportunidades de Crescimento", "Otimização de Processos", "Gerenciamento de Equipe e Demandas", "Fechamentos e Conciliação Financeira"],
    imagePath: "/ecossistema_gestao.webp"
  }, {
    id: "operacao",
    title: "Operação",
    icon: <Layers className="h-6 w-6 text-proximanova-blue" />,
    description: "Realizamos o cadastro, revisão e otimização de anúncios. Cuidamos do atendimento pré e pós-venda. Gerenciamos campanhas de Ads, Promoções e muito mais.",
    features: ["Cadastro de anúncios", "Revisão e otimização de anúncios", "Gestão de Catálogo", "Gestão de Ads", "Gestão de Promoções", "Gestão de FULL", "Gestão da Minha Página", "Atendimento Pré-Venda", "Atendimento Pós-Venda"],
    imagePath: "/ecossistema_operacao.webp"
  }, {
    id: "armazenamento",
    title: "Armazenamento & Expedição",
    icon: <Package2 className="h-6 w-6 text-proximanova-blue" />,
    description: "Cuidamos do armazenamento e da expedição dos seus pedidos com segurança, eficiência e agilidade.",
    features: ["Recebimento de Mercadorias", "Armazenamento Seguro", "Picking e Packing", "Gestão e Controle de Estoque", "Logística Reversa"],
    imagePath: "/ecossistema_expedicao.webp"
  }, {
    id: "logistica",
    title: "Logística Flex e Full",
    icon: <Truck className="h-6 w-6 text-proximanova-blue" />,
    description: "Oferecemos soluções de transporte para as modalidades Flex e Full, integrando sua logística.",
    features: ["Transporte aos Centros Logístico do Full (SP e SC)", "Logística de Envios Flex"],
    imagePath: "/ecossistema_logistica.webp"
  }];
  
  return <>
      <Header />
      
      <EcosystemHeader />
      
      <EcosystemOverview ecosystemComponents={ecosystemComponents} />
      
      <EcosystemDetailComponents ecosystemComponents={ecosystemComponents} />
      
      <CallToAction title="Pronto para explorar nosso ecossistema?" buttonText="Solicite um orçamento" buttonLink="/contact" />
      
      <Footer />
      <WhatsAppButton />
    </>;
};

export default Ecosystem;
