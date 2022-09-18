import { usersApi } from "../../api";
import { SignUpPayload } from "../../types";

const useUser = () => {
  const onSignUp = (formData: SignUpPayload) => {
    usersApi.save(formData);
  };

  return { onSignUp };
};

export { useUser };
