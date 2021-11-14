import useUser from "../hooks/useUser";
import LoginPage from "../pages/LoginPage/LoginPage";

const PrivateRoute = ({ children }) => {
  const { user } = useUser();
  return user.isAuthenticated ? children : <LoginPage />;
};

export default PrivateRoute;
