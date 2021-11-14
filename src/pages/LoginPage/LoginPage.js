import LoginForm from "../../components/Forms/Auth/LoginForm";
import useUser from "../../hooks/useUser";
import HomePage from "../HomePage/HomePage";

const LoginPage = () => {
  const { user } = useUser();

  return user.isAuthenticated ? (
    <HomePage />
  ) : (
    <>
      <h1 className="text-4xl">Login</h1>
      <LoginForm />
    </>
  );
};

export default LoginPage;
