import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
const WhoWeAre = () => {
  // Estados para controlar a contagem de cada número
  const [yearsCount, setYearsCount] = useState(0);
  const [businessesCount, setBusinessesCount] = useState(0);
  const [gmvCount, setGmvCount] = useState(0);

  // Valores finais para cada contador
  const finalYears = 5;
  const finalBusinesses = 60;
  const finalGMV = 50;

  // Efeito para realizar a animação de contagem
  useEffect(() => {
    // Duração da animação em milissegundos
    const animationDuration = 2000;

    // Para verificar se o elemento está visível na tela
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Contador de anos
          let yearsStartTime: number;
          function animateYears(timestamp: number) {
            if (!yearsStartTime) yearsStartTime = timestamp;
            const elapsed = timestamp - yearsStartTime;
            const progress = Math.min(elapsed / animationDuration, 1);
            setYearsCount(Math.floor(progress * finalYears));
            if (progress < 1) {
              requestAnimationFrame(animateYears);
            }
          }

          // Contador de negócios
          let businessesStartTime: number;
          function animateBusinesses(timestamp: number) {
            if (!businessesStartTime) businessesStartTime = timestamp;
            const elapsed = timestamp - businessesStartTime;
            const progress = Math.min(elapsed / animationDuration, 1);
            setBusinessesCount(Math.floor(progress * finalBusinesses));
            if (progress < 1) {
              requestAnimationFrame(animateBusinesses);
            }
          }

          // Contador de GMV
          let gmvStartTime: number;
          function animateGMV(timestamp: number) {
            if (!gmvStartTime) gmvStartTime = timestamp;
            const elapsed = timestamp - gmvStartTime;
            const progress = Math.min(elapsed / animationDuration, 1);
            setGmvCount(Math.floor(progress * finalGMV));
            if (progress < 1) {
              requestAnimationFrame(animateGMV);
            }
          }

          // Iniciar as animações
          requestAnimationFrame(animateYears);
          requestAnimationFrame(animateBusinesses);
          requestAnimationFrame(animateGMV);

          // Parar de observar após iniciar as animações
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.2
    });

    // Elemento a ser observado
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    // Limpar o observador ao desmontar o componente
    return () => {
      observer.disconnect();
    };
  }, []);
  return <section className="section bg-white py-16 md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row mb-16 gap-8">
          {/* Container para o texto - ocupa 2/3 da largura em telas médias e grandes */}
          <div className="md:w-2/3 flex flex-col items-center text-center bg-gray-50 rounded-2xl">
            <div className="flex flex-col items-center mb-4">
              <div className="bg-proximanova-blue/10 p-3 rounded-full">
                <Users className="h-6 w-6 text-proximanova-blue" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-proximanova-blue mt-4">Sobre Nós</h2>
            </div>
            <div className="h-1 w-20 bg-proximanova-yellow mb-6"></div>
            
            <div className="text-lg space-y-4 text-gray-700">
              <p>Na Próxima Nova, acreditamos que o presente e o futuro do varejo será cada vez mais digital — e estamos aqui para construir essa transformação ao lado das empresas.</p>
              
              <p>Oferecemos um ecossistema completo: educação, tecnologia, gestão, operação e logística — tudo em um único parceiro estratégico.</p>
              
              <p>Mais do que uma simples consultoria ou assessoria, somos fullcommerce: orientamos, executamos, cuidamos e entregamos resultados aos nossos clientes.</p>
              
              <p className="font-medium">Bem-vindo à Próxima Nova.
              O sucesso das suas vendas online começa aqui.</p>
            </div>
          </div>
          
          {/* Container para o selo - ocupa 1/3 da largura em telas médias e grandes */}
          <div className="md:w-1/3 flex items-center justify-center">
            <img src="/selo_consultoria_certificada.png" alt="Selo de Consultoria Certificada do Mercado Livre" className="max-w-full h-auto max-h-64" />
          </div>
        </div>
        
        {/* Grade para os números estatísticos - agora com melhor agrupamento visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stats-section">
          <div className="flex flex-col items-center text-center">
            <div>
              <span className="text-6xl font-bold text-proximanova-blue">+{yearsCount}</span>
              <h3 className="text-xl font-semibold text-proximanova-blue mt-1">Anos de Experiência</h3>
            </div>
            <p className="text-gray-600 mt-2">Estamos desde 2020 ajudando empresas a venderem online através do Mercado Livre</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div>
              <span className="text-6xl font-bold text-proximanova-blue">+{businessesCount}</span>
              <h3 className="text-xl font-semibold text-proximanova-blue mt-1">Negócios Transformados</h3>
            </div>
            <p className="text-gray-600 mt-2">Já ajudamos dezenas de negócios do varejo tradicional a se tornarem lojistas digitais</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div>
              <span className="text-6xl font-bold text-proximanova-blue">+{gmvCount}M</span>
              <h3 className="text-xl font-semibold text-proximanova-blue mt-1">De GMV Bruto</h3>
            </div>
            <p className="text-gray-600 mt-2">Mais de R$50 milhões faturados anualmente pelos nossos clientes sob nossa gestão</p>
          </div>
        </div>
      </div>
    </section>;
};
export default WhoWeAre;