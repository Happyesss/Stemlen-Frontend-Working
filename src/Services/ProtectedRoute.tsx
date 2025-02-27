import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const token = useSelector((state: any) => state.jwt);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const decoded: any = jwtDecode(token);

  if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(decoded.accountType)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
