import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import useUser from "../../../hooks/useUser";

const LoginForm = () => {
  const navigate = useNavigate();
  const { loginUser } = useUser();

  const initialValue = {
    username: "",
    password: "",
  };
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(inputValue);
    navigate("/home");
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        noValidate
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="username"
            placeholder="Username"
            value={inputValue.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            autoComplete="off"
            value={inputValue.password}
            type="password"
            id="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Log in
          </button>
        </div>

        <Link to="/register" className="text-blue-700 underline">
          Sing in if you dont have account
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
