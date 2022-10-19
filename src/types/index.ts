export type User = {
  avatar: string;
  birthdate: Date;
  city: string;
  country: string;
  email: string;
  friends: string[];
  id: string;
  lastname: string;
  name: string;
  password: string;
  sessionToken: string;
  state: string;
};

export type SignUpPayload = {
  avatar: string;
  birthdate: Date;
  city: string;
  country: string;
  email: string;
  lastname: string;
  name: string;
  password: string;
};

export type LogInPayload = {
  email: string;
  password: string;
};

export type Movie = {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};
