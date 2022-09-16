import { useLocation, Navigate } from "react-router-dom";
import { isAuthenticated } from ".";

export function AuthRequired({ children }: { children: JSX.Element }) {
  let  user  = isAuthenticated();
  let location = useLocation();
    console.log(user)
  if (!user) {
    return <Navigate to="/welcome" state={{ from: location }} replace />;
  } else {
    return children;
  }
}