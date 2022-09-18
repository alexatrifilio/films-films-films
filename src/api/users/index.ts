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

const get = async (id: string): Promise<User> => {
  const response = await apiDB(`/users/${id}.json`);
  return response.data;
};

const erase = async (id: string) => {
  await apiDB.delete(`/users/${id}.json`);
};

export const usersApi = { add, getAll, get };
