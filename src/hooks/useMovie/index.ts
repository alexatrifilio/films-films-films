import { useState } from "react";
import { movieApi } from "../../api";
import { Movie } from "../../types";

const useMovie = () => {
  const [movie, setMovie] = useState("");
  const [results, setResults] = useState<Movie[] | undefined>(undefined);
  const [page, setPage] = useState(1);

  const search = async (movie: string, page: number) => {
    const data = await movieApi.search(movie, page);
    setResults(data);
  };

  return { movie, setMovie, results, search, page, setPage };
};

export { useMovie };
