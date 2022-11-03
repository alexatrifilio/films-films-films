import { PostPayload } from "../../../types";

export const defaultValuesPost: PostPayload = {
  title: "",
  detail: "",
  date: new Date().toLocaleDateString(),
  comments: [],
  user: { name: "", lastname: "", id: "", avatar: "" },
};
