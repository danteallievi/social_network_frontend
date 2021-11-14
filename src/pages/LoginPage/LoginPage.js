import LoginForm from "../../components/Forms/Auth/LoginForm";
import useUser from "../../hooks/useUser";
import HomePage from "../HomePage/HomePage";

const LoginPage = () => {
  const { user } = useUser();

  return user.isAuthenticated ? (
    <HomePage />
  ) : (
    <>
      <div className="">
        <h1>Login</h1>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
