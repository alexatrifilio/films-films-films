import { mapToArray } from "../../helpers";
import { SignUpPayload, User } from "../../types";
import { apiDB } from "../../utils";

const save = async (user: SignUpPayload) => {
  await apiDB.post("/users.json", user);
};
const getAll = async (): Promise<User[]> => {
  const response = await apiDB.get("/users.json");
  return mapToArray(response.data);
};

const get = async (id: string): Promise<User> => {
  const response = await apiDB.get(`/users/${id}.json`);
  return response.data;
};

const erase = async (id: string) => {
  await apiDB.delete(`/users/${id}.json`);
};

const patch = async (id: string, payload: Partial<User>) => {
  const response = await apiDB.patch(`/users/${id}.json`, payload);
  return response.data;
};

export const usersApi = { save, getAll, get, erase, patch };
