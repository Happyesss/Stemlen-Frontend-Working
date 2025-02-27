import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: JSX.Element;
  restricted?: boolean; // If true, authenticated users will be redirected
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children, restricted = false }) => {
  const token = useSelector((state: any) => state.jwt);

  if (token && restricted) {
    return <Navigate to="/" replace />; 
  }

  return children;
};

export default PublicRoute;
