
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
    text: "With Próxima Nova's help, we increased our online sales by 300% in just 6 months. Their ecosystem approach made all the difference.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    stars: 5
  },
  {
    name: "Socrátes",
    company: "Casa do Chumbador",
    text: "The Digital Retailer Program gave us exactly what we needed to start selling professionally on marketplaces. Highly recommended!",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    stars: 5
  },
  {
    name: "Tiago",
    company: "Fatelli",
    text: "The strategic consulting was eye-opening. Their team identified opportunities we never thought of, and now we're growing faster than ever.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    stars: 5
  }
];
