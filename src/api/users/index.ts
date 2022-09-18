import { mapToArray } from "../../helpers";
import { SignUpPayload, User } from "../../types";
import { apiDB } from "../../utils";

const save = async (user: SignUpPayload) => {
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

const patch = async (id: string, payload: Partial<User>) => {
  await apiDB.patch(`/users/${id}.json`, JSON.stringify(payload));
};

export const usersApi = { save, getAll, get, erase, patch };
