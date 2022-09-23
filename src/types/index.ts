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
