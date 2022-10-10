import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Protected = ({ children }) => {
  const loggedIn = useAuth();
  const location = useLocation();
  if (loggedIn) {
    return children;
  } else {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
};

export default Protected;
