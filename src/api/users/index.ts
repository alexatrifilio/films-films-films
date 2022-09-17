import { mapToArray } from "../../helpers";
import { SignUpPayload, User } from "../../types";
import { apiDB } from "../../utils";

const add = async (user: SignUpPayload) => {
  await apiDB.post("/users.json", JSON.stringify(user));
};

const getAll = async (): Promise<User[]> => {
  const response = await apiDB("/users.json");
  return mapToArray(response.data);
};

export const usersApi = { add, getAll };
