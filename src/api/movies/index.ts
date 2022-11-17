import { Movie } from "../../types";
import { movieDB } from "../../utils";

const search = async (query: string, page: number) /*: Promise<Movie[]>*/ => {
  const response = await movieDB("search/movie", {
    params: {
      query,
      page,
    },
  });

  return response.data;
};

export const movieApi = { search };
