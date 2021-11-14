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
      <form onSubmit={onSubmit} autoComplete="off" noValidate>
        <div>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={inputValue.name}
            onChange={handleChange}
          />
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

          <label htmlFor="password">Age</label>
          <input
            autoComplete="off"
            value={inputValue.age}
            type="number"
            id="age"
            onChange={handleChange}
            placeholder="Age"
          />
        </div>
        <div>
          <button>Sign in</button>
        </div>
      </form>
    </>
  );
};

export default Register;
