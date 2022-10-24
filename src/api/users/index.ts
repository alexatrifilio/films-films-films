import { mapToArray } from "../../helpers";
import { SignUpPayload, User } from "../../types";
import { apiDB } from "../../utils";

const save = async (user: SignUpPayload) => {
  try {
    await apiDB.post("/users.json", user);
  } catch (err) {
    console.log(err);
  }
};
const getAll = async (): Promise<User[]> => {
  try {
    const response = await apiDB("/users.json");
    return mapToArray(response.data);
  } catch (err) {
    console.log(err);
  }
};

const get = async (id: string): Promise<User> => {
  try {
    const response = await apiDB(`/users/${id}.json`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const erase = async (id: string) => {
  try {
    await apiDB.delete(`/users/${id}.json`);
  } catch (err) {
    console.log(err);
  }
};

const patch = async (id: string, payload: Partial<User>) => {
  try {
    const response = await apiDB.patch(`/users/${id}.json`, payload);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const usersApi = { save, getAll, get, erase, patch };
