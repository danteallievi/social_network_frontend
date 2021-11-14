import { useNavigate } from "react-router";

import useUser from "../../../hooks/useUser";

const Logout = () => {
  const navigate = useNavigate();

  const { logoutUser } = useUser();
  const handleClick = () => {
    logoutUser();
    navigate("/login");
  };

  return <button onClick={handleClick}>Log out</button>;
};

export default Logout;
