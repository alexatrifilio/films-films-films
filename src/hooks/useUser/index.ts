import { usersApi } from "../../api";
import { SignUpPayload } from "../../types";

const useUser = () => {
  const signUp = (formData: SignUpPayload) => {
    usersApi.save(formData);
  };

  return { signUp };
};

export { useUser };
