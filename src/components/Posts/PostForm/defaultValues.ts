import { PostPayload } from "../../../types";

export const defaultValuesPost: PostPayload = {
  title: "",
  detail: "",
  date: new Date(),
  comments: [],
  user: { name: "", lastname: "", id: "", avatar: "" },
};
