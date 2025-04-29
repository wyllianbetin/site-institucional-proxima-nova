import React from 'react';
import { ArrowRight } from 'lucide-react';
interface SolutionCardProps {
  title: string;
  description: string;
  onClick: () => void;
  imagePath?: string;
}
const SolutionCard = ({
  title,
  description,
  onClick,
  imagePath
}: SolutionCardProps) => {
  const [imageError, setImageError] = React.useState(false);
  const handleImageError = () => {
    console.log(`Failed to load image: ${imagePath}`);
    setImageError(true);
  };
  return <div className="solution-card text-center rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white" onClick={onClick}>
      {imagePath && !imageError ? <div className="mb-4 h-40 overflow-hidden rounded-md">
          <img src={imagePath} alt={title} className="w-full h-full object-cover" onError={handleImageError} />
        </div> : null}
      <h3 className="text-xl font-bold text-proximanova-blue mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button className="text-proximanova-blue font-medium hover:text-proximanova-yellow transition-colors flex items-center justify-center w-full">
        Saiba mais
        <ArrowRight className="h-4 w-4 ml-2" />
      </button>
    </div>;
};
interface SolutionsOverviewProps {
  onScrollToConsulting: () => void;
  onScrollToRetailer: () => void;
  onScrollToSeller: () => void;
}
const SolutionsOverview = ({
  onScrollToConsulting,
  onScrollToRetailer,
  onScrollToSeller
}: SolutionsOverviewProps) => {
  return <section className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-4">Soluções para todas as etapas da sua jornada no Mercado Livre</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Não importa se você ainda não vende online ou se já vende e quer melhorar os resultados, temos a solução certa para você.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <SolutionCard title="Curso + Consultoria" description="Treinamento e consultoria para quem quer iniciar no e-commerce com suporte e acompanhamento durante 6 meses." onClick={onScrollToConsulting} imagePath="/consultoria.jpg" />
          
          <SolutionCard title="Programa Lojista Digital" description="Implementamos a operação de vendas online para empresas que não têm tempo, equipe ou experiência em marketplaces." onClick={onScrollToRetailer} imagePath="/programa_lojista_digital.jpg" />
          
          <SolutionCard title="Programa Seller" description="Aceleramos sellers que já vendem online, otimizando e escalando os resultados no Mercado Livre." onClick={onScrollToSeller} imagePath="/programa_seller.jpg" />
        </div>
      </div>
    </section>;
};
export default SolutionsOverview;