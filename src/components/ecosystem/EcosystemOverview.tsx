
import React from 'react';
import { Layers } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { EcosystemComponentType } from '@/types/ecosystem';

interface EcosystemOverviewProps {
  ecosystemComponents: EcosystemComponentType[];
}

const EcosystemOverview = ({
  ecosystemComponents
}: EcosystemOverviewProps) => {
  return <section className="py-8 md:py-10 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-3">
              <div className="bg-proximanova-blue/10 p-2 rounded-full mr-3">
                <Layers className="h-5 w-5 text-proximanova-blue" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-proximanova-blue">Ecossistema Completo</h2>
            </div>
            <div className="h-1 w-16 bg-proximanova-yellow mb-4"></div>
            <div className="space-y-3 text-gray-700">
              <p>Desenvolvemos uma metodologia única de ecossistema que inclui todos os aspectos do varejo digital. Em vez de focar em soluções isoladas, integramos educação, tecnologia, gestão, operação e logística para criar uma estrutura completa para o sucesso do seu marketplace.</p>
              <p>
                Nosso ecossistema garante que seu negócio tenha todas as ferramentas, conhecimentos 
                e suporte necessários para prosperar no ambiente digital, independentemente do seu ponto de partida.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {ecosystemComponents.map((component, index) => <div key={index} className="relative rounded-lg overflow-hidden group h-32 md:h-36">
                  <AspectRatio ratio={1 / 1} className="h-full">
                    <img src={component.imagePath} alt={component.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                }} />
                    <div className="absolute inset-0 bg-proximanova-blue/60 flex items-center justify-center p-3">
                      <a href={`#${component.id}`} className="w-full h-full flex items-center justify-center">
                        <h3 className="text-white text-center font-semibold text-sm md:text-base">{component.title}</h3>
                      </a>
                    </div>
                  </AspectRatio>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default EcosystemOverview;
