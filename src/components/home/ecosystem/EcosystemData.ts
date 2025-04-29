
export const ecosystemComponents = [
  {
    title: "Educação",
    description: "Treinamos você e sua equipe para dominar as vendas online e crescer no digital.",
    imagePath: "/ecossistema_educacao.webp"
  },
  {
    title: "Tecnologia",
    description: "Conectamos e integramos seu negócio a sistemas inteligentes para controlar e escalar suas vendas.",
    imagePath: "/ecossistema_tecnologia.webp"
  },
  {
    title: "Gestão",
    description: "Planejamos estratégias e acompanhamos métricas para impulsionar seu crescimento.",
    imagePath: "/ecossistema_gestao.webp"
  },
  {
    title: "Operação",
    description: "Realizamos o cadastro, revisão e otimização de anúncios. Cuidamos do atendimento pré e pós-venda.",
    imagePath: "/ecossistema_operacao.webp"
  },
  {
    title: "Armazenamento & Expedição",
    description: "Cuidamos do armazenamento e da expedição dos seus pedidos com segurança, eficiência e agilidade.",
    imagePath: "/ecossistema_expedicao.webp"
  },
  {
    title: "Logística Flex e Full",
    description: "Oferecemos soluções de transporte para as modalidades Flex e Full, integrando sua logística.",
    imagePath: "/ecossistema_logistica.webp"
  }
];

// Function to calculate positions in a circle
export const calculatePosition = (index: number, totalItems: number, radius: number) => {
  const angle = ((Math.PI * 2) / totalItems) * index - Math.PI / 2;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return { x, y };
};

// Function to calculate arrowhead coordinates for curved lines
export const calculateArrowhead = (index: number, totalItems: number, radius: number, arrowSize: number = 1) => {
  // Calculate current and next component index (following the specified flow)
  let nextIndex;
  // Define the flow: Educação > Tecnologia > Gestão > Operação > Armazenamento > Logística > Educação
  if (index === 0) nextIndex = 1;      // Educação -> Tecnologia
  else if (index === 1) nextIndex = 2; // Tecnologia -> Gestão
  else if (index === 2) nextIndex = 3; // Gestão -> Operação
  else if (index === 3) nextIndex = 4; // Operação -> Armazenamento
  else if (index === 4) nextIndex = 5; // Armazenamento -> Logística
  else nextIndex = 0;                  // Logística -> Educação
  
  const currentAngle = ((Math.PI * 2) / totalItems) * index - Math.PI / 2;
  const nextAngle = ((Math.PI * 2) / totalItems) * nextIndex - Math.PI / 2;
  
  // Calculate a point along the arc between the current and next component
  const midAngle = (currentAngle + nextAngle) / 2;
  
  // Adjust the angle to point the arrow in the direction of flow
  const arrowAngle = midAngle + Math.PI / 2;
  
  const x = radius * Math.cos(midAngle);
  const y = radius * Math.sin(midAngle);
  
  // Calculate arrowhead points
  const x1 = x + arrowSize * Math.cos(arrowAngle - Math.PI / 6);
  const y1 = y + arrowSize * Math.sin(arrowAngle - Math.PI / 6);
  const x2 = x + arrowSize * Math.cos(arrowAngle + Math.PI / 6);
  const y2 = y + arrowSize * Math.sin(arrowAngle + Math.PI / 6);
  
  return { 
    point: {x, y}, 
    arrow1: {x: x1, y: y1}, 
    arrow2: {x: x2, y: y2},
    currentIndex: index,
    nextIndex: nextIndex
  };
};
