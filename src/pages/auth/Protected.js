import { Navigate, useLocation } from "react-router-dom";
import ContextProviders from "../../ContextProviders";
import useAuth from "../../hooks/useAuth";

const Protected = ({ children }) => {
  const loggedIn = useAuth();
  const location = useLocation();
  if (loggedIn) {
    return <ContextProviders>{children}</ContextProviders>;
  } else {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
};

export default Protected;
