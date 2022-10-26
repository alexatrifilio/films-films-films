import { useState } from "react";
import { movieApi } from "../../api";
import { Movie } from "../../types";

const useMovie = () => {
  const [movie, setMovie] = useState("");
  const [results, setResults] = useState<Movie[] | undefined>(undefined);

  const search = async () => {
    const data = await movieApi.search(movie, 1);
    setResults(data);
  };

  return { movie, setMovie, results, search };
};

export { useMovie };
