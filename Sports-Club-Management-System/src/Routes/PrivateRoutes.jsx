import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoutes;
