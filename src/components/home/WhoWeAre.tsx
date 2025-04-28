
import React from 'react';
import { Users } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-proximanova-blue/10 p-3 rounded-full mb-4">
            <Users className="h-6 w-6 text-proximanova-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mb-3">Sobre Nós</h2>
          <div className="h-1 w-20 bg-proximanova-yellow mb-6"></div>
          
          <div className="text-lg max-w-3xl mx-auto text-gray-700 space-y-4">
            <p>
              Na Próxima Nova, acreditamos que o presente e o futuro do varejo é cada vez mais digital — e estamos aqui para construir essa transformação ao lado das empresas.
            </p>
            
            <p>
              Oferecemos um ecossistema completo que viabiliza que lojas físicas, marcas, distribuidores, importadores e fabricantes vendam no Mercado Livre, por meio de tecnologia, treinamentos, gestão, operação e logística. Tudo reunido em um único parceiro estratégico.
            </p>
            
            <p>
              Nosso time é formado por consultores certificados, especialistas em marketplaces e profissionais operacionais, prontos para cuidar de todas as etapas das vendas online de nossos parceiros.
            </p>
            
            <p>
              Mais do que uma consultoria ou assessoria, somos um fullcommerce. Nós orientamos, cuidamos, executamos e entregamos resultados. Somos comprometidos em proporcionar crescimento real e sustentável para cada empresa que confia na nossa expertise.
            </p>
            
            <p>
              Nossa missão é simples: Transformar o potencial do varejo tradicional em histórias de sucesso no universo do varejo digital.
            </p>
            
            <p className="font-medium">
              Bem-vindo à Próxima Nova. O sucesso das suas vendas online começa aqui.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-proximanova-blue/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-proximanova-blue">+5</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Anos de Experiência</h3>
            <p className="text-gray-600">Estamos desde 2020 ajudando empresas a venderem online</p>
          </div>
          
          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-proximanova-blue/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-proximanova-blue">+100</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Negócios Transformados</h3>
            <p className="text-gray-600">Dezenas de negócios tradicionais já escalaram as vendas online através das nossas soluções</p>
          </div>
          
          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-proximanova-blue/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-proximanova-blue">+50M</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">De GMV Bruto</h3>
            <p className="text-gray-600">Mais de 50 milhões de reais faturados anualmente pelos nossos clientes sob nossa gestão</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
