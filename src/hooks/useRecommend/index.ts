import { recommendedApi } from "../../api";
import { RecommendedPayload } from "../../types";

const useRecommended = () => {
  const saveToApi = (movieData: RecommendedPayload) => {
    recommendedApi.save(movieData);
  };

  return { saveToApi };
};

export { useRecommended };
