export type Country = {
  id?: number;
  name: string;
  cities: string[];
};

const countries: Country[] = [
  {
    id: 1234,
    name: "Argentina",
    cities: [
      "Buenos Aires",
      "Santa Fe",
      "Córdoba",
      "Bariloche",
      "Viedma",
      "Rawson",
      "Rosario",
    ],
  },
  {
    name: "Brasil",
    cities: [
      "Salvador",
      "Sao Paolo",
      "Río de Janeiro",
      "Ilheus",
      "Curitiba",
      "Camboriu",
    ],
  },
  {
    name: "Colombia",
    cities: [
      "Barranquilla",
      "Bucaramanga",
      "Bogotá",
      "Cali",
      "Medellín",
      "Santa Marta",
      "Leticia",
    ],
  },
];

export { countries };
