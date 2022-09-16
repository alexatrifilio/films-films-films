import { apiDB } from "../../utils";

const add = async () => {
  await apiDB.post("/users.json", {});
};

export const usersApi = { add };
