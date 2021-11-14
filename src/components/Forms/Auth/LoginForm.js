import { useState } from "react";
import { useNavigate } from "react-router";

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
    <form onSubmit={onSubmit} autoComplete="off" noValidate>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={inputValue.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          autoComplete="off"
          value={inputValue.password}
          type="password"
          id="password"
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

export default LoginForm;
