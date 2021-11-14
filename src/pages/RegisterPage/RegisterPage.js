import Register from "../../components/Forms/Auth/Register";
import useUser from "../../hooks/useUser";
import HomePage from "../HomePage/HomePage";

const RegisterPage = () => {
  const { user } = useUser();

  return user.isAuthenticated ? (
    <HomePage />
  ) : (
    <>
      <div className="">
        <h1 className="text-4xl">Register</h1>

        <Register />
      </div>
    </>
  );
};

export default RegisterPage;
