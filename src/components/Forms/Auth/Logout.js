import useUser from "../../../hooks/useUser";

const Logout = () => {
  const { logoutUser } = useUser();
  const handleClick = () => {
    logoutUser();
  };

  return <button onClick={handleClick}>Log out</button>;
};

export default Logout;
