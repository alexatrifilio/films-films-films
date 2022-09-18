import { SignUpPayload } from "../../../types";

export const defaultValues: SignUpPayload = {
  avatar: "",
  name: "",
  lastname: "",
  birthdate: new Date(),
  email: "",
  password: "",
  country: "",
  city: "",
};
