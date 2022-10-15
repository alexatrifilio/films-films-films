import { movieDB } from "../../utils";

const search = async (query: string, page: number) => {
  const response = await movieDB("search/movie", {
    params: {
      query,
      page,
    },
  });
  return response.data;
};

export const movieApi = { search };
