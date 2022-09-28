import { FC } from "react";
import { Layout, LogInForm } from "../../components";
import { useAuth } from "../../hooks/useAuth";

const LogIn: FC = () => {
  const { logIn } = useAuth();
  return (
    <Layout page="login">
      <LogInForm onLogin={logIn} />
    </Layout>
  );
};

export { LogIn };
