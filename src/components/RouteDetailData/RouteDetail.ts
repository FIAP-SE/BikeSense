
export interface BikeRoute {
  title: string;
  distance: string;
  level: string;
  type: string;
  airQuality: string;
  forecast: string;
  temperature: string;
  description: string;
  image: string;
}

export const bikeRoutes: BikeRoute[] = [
  {
    title: "Ciclovia da Faria Lima até o Parque do Povo",
    distance: "3,5 km",
    level: "Iniciante",
    type: "Urbano",
    airQuality: "ótima",
    forecast: "encoberto",
    temperature: "24°",
    description:
      "Ótima para quem quer pedalar antes ou depois do trabalho. Rota segura, plana e bem conectada com comércio e áreas verdes.",
    image: "/img/faria-lima.jpg",
  },
];
