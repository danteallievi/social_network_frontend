import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useUser from "../../../hooks/useUser";

const Register = () => {
  const navigate = useNavigate();
  const { registerUser } = useUser();

  const initialValue = {
    name: "",
    username: "",
    password: "",
    age: "",
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
    registerUser(inputValue);
    navigate("/login");
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        noValidate
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div>
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={inputValue.name}
            onChange={handleChange}
          />
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            autoComplete="off"
            value={inputValue.password}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            onChange={handleChange}
            placeholder="Password"
          />

          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Age
          </label>
          <input
            autoComplete="off"
            value={inputValue.age}
            type="number"
            id="age"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            placeholder="Age"
          />
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
