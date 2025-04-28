
export interface Testimonial {
  name: string;
  company: string;
  text: string;
  image: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rodrigo",
    company: "Top Spin",
    text: "Já vendíamos no Mercado Livre, mas nossos resultados ainda eram baixos. Tínhamos muito gasto com Ads e pouco retorno. Através da parceria com a Próxima Nova, conseguimos escalar nossas vendas e otimizar os investimentos em publicidade.",
    image: "https://raw.githubusercontent.com/wyllianbetin/site-institucional-proxima-nova/refs/heads/main/public/topspin-imagem.png",
    stars: 5
  },
  {
    name: "Socrátes",
    company: "Casa do Chumbador",
    text: "Sempre tivemos uma loja física muito forte, mas sabíamos que precisávamos entrar no mundo digital. A Próxima Nova nos ajudou a estruturar tudo. Em poucos meses, conquistamos a medalha de MercadoLíder e estamos expandindo nossa operação graças ao trabalho deles.",
    image: "https://raw.githubusercontent.com/wyllianbetin/site-institucional-proxima-nova/refs/heads/main/public/casadochumbador-imagem.png",
    stars: 5
  },
  {
    name: "Tiago",
    company: "Fatelli",
    text: "Começamos sem nenhuma venda e, em poucos meses, já estávamos faturando diariamente no Mercado Livre. A Próxima Nova não ficou só na teoria: entrou no dia a dia da operação e realmente fez acontecer. Hoje temos uma operação organizada, enxuta e com escalabilidade.",
    image: "https://raw.githubusercontent.com/wyllianbetin/site-institucional-proxima-nova/refs/heads/main/public/fatelli-imagem.png",
    stars: 5
  }
];
