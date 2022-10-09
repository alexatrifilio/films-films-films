import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const publicRoutes = ["/login", "/signup"];

const withAuth = (WrappedComponent: FC): FC => {
  const Authenticated: FC = (): any => {
    const { me } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (!me && !publicRoutes.includes(location.pathname)) {
        navigate("/login");
      }
    }, [me]);

    return <WrappedComponent />;
  };

  return Authenticated;
};

export { withAuth };
