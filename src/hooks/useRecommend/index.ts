import { useState } from "react";
import { recommendedApi } from "../../api";
import { RecommendedPayload } from "../../types";

const useRecommended = () => {
  const [reco, setReco] = useState<RecommendedPayload>({
    title: "",
    comments: [],
    detail: "",
    image: "",
    date: new Date(),
    user: { id: "", name: "", lastname: "" },
  });

  const saveToApi = (movieData: RecommendedPayload) => {
    recommendedApi.save(movieData);
  };

  return { saveToApi, setReco };
};

export { useRecommended };
