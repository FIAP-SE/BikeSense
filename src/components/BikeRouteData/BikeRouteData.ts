export interface BikeRoute {
  title: string;
  distance: string;
  level: string;
  type: string;
  airQuality: string;
  forecast: string;
  temperature: string;
  description: string;
}

export const bikeRoutes: BikeRoute[] = [
  {
    title: 'Ciclovia da Faria Lima até o Parque do Povo',
    distance: '3,5 km',
    level: 'Iniciante',
    type: 'Urbano',
    airQuality: 'ótima',
    forecast: 'encoberto',
    temperature: '24°',
    description: 'Ótima para quem quer pedalar antes ou depois do trabalho. Rota segura, plana e bem conectada com comércio e áreas verdes.',
  },
  {
    title: 'Parque Villa-Lobos até a USP',
    distance: '6 km (ida)',
    level: 'Intermediário',
    type: 'Urbano',
    airQuality: 'ótima',
    forecast: 'ensolarado',
    temperature: '23°',
    description: 'Ideal para treinos ou para curtir uma manhã de domingo. Inclui trechos arborizados e boas condições de pista.',
  },
  {
    title: 'Ciclovia da Radial Leste',
    distance: '9 km',
    level: 'Intenso',
    type: 'Urbano',
    airQuality: 'moderada',
    forecast: 'nublado',
    temperature: '25°',
    description: 'Boa alternativa para quem quer atravessar grandes distâncias sem depender de carro ou transporte público. Ótima para deslocamento funcional.',
  },
  {
    title: 'Trilha do Parque da Cantareira',
    distance: '12 km (ida)',
    level: 'Avançado',
    type: 'Trilha',
    airQuality: 'boa',
    forecast: 'ensolarado',
    temperature: '22°',
    description: 'Perfeita para quem busca um desafio maior. Inclui subidas e descidas, além de trechos com pedras e raízes.',
  },
  {
    title: 'Caminho do Sol - Serra da Mantiqueira',
    distance: '20 km (ida)',
    level: 'Avançado',
    type: 'Misto',
    airQuality: 'boa',
    forecast: 'ensolarado',
    temperature: '20°',
    description: 'Uma das trilhas mais bonitas da região, com vistas deslumbrantes. Ideal para quem busca aventura e contato com a natureza.',
  },
];
