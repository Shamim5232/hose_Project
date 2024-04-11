import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // if (loading) {
  //   return <span className="loading loading-ball loading-lg"></span>;
  // }
  console.log(user);
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default ProtectedRoute;
