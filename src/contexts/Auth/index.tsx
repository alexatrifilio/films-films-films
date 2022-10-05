import { createContext, FC, ReactNode, useState } from "react";
import { User } from "../../types";

type AuthContextType = {
  me?: User;
  setCurrentUser: (newUser?: User) => void;
};

const AuthContext = createContext<AuthContextType>({
  me: undefined,
  setCurrentUser: () => {},
});

type Props = {
  children: ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
  const [me, setMe] = useState<User>();
  const setCurrentUser = (newUser?: User) => {
    setMe(newUser);
  };
  return (
    <AuthContext.Provider value={{ me, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
