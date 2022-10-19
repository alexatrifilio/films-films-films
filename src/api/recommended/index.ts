import { mapToArray } from "../../helpers";
import { Recommended } from "../../types";
import { recommendedDB } from "../../utils/axios";

const save = async (movie: Recommended) => {
  await recommendedDB.post("/movies.json", movie);
};

const getAll = async (): Promise<Recommended[]> => {
  const response = await recommendedDB("/movies.json");
  return mapToArray(response.data);
};

const get = async (id: string): Promise<Recommended> => {
  const response = await recommendedDB(`/movies/${id}.json`);
  return response.data;
};

export const recommendedApi = { save, getAll, get };
