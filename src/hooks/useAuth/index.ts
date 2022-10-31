import { useContext, useEffect } from "react";
import { usersApi } from "../../api";
import { AuthContext } from "../../contexts";
import { LogInPayload, User } from "../../types";

const useAuth = () => {
  const { me, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    loginWithToken();
  }, []);

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
        setCurrentUser(logged);
      }
    }
  };

  const loginWithToken = async () => {
    const users = await usersApi.getAll();
    const storedToken = localStorage.getItem("user-token");
    const logged = users.find((user) => user.sessionToken === storedToken);

    if (!me && logged) {
      setCurrentUser(logged);
    }
  };

  const logOut = async () => {
    if (me) {
      usersApi.patch(me.id, { sessionToken: undefined });
      setCurrentUser(undefined);
    }
  };

  return { logIn, me, logOut };
};

export { useAuth };
