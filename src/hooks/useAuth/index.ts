import { usersApi } from "../../api";
import { LogInPayload, User } from "../../types";

const useAuth = () => {
  const logIn = async ({ email, password }: LogInPayload) => {
    const setUserToken = async (id: string) => {
      const newToken = Math.random().toString(36).substr(2);
      const rsp = await usersApi.patch(id, { sessionToken: newToken });
      return rsp ? newToken : null;
    };

    const users = await usersApi.getAll();
    const logged = users.find(
      (user) => user.email === email && user.password === password
    );
    if (logged) {
      const token = await setUserToken(logged.id);

      if (token) {
        localStorage.setItem("user-token", token);
      }
    }
  };

  return { logIn };
};

export { useAuth };
