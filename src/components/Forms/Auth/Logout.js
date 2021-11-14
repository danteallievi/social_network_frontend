import { useNavigate } from "react-router";

import useUser from "../../../hooks/useUser";

const Logout = () => {
  const navigate = useNavigate();

  const { logoutUser } = useUser();
  const handleClick = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Log out
    </button>
  );
};

export default Logout;
