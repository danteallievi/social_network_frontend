import { useEffect } from "react";
import Logout from "../../components/Forms/Auth/Logout";
import useUser from "../../hooks/useUser";

const HomePage = () => {
  const { loadAllUsers, social } = useUser();

  useEffect(() => {
    loadAllUsers();
  }, [loadAllUsers]);
  return social.length ? (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl">Home</h1>
      <Logout />
      {social.map((user) => (
        <div key={user.id} className="">
          <h2>{user.name}</h2>
          <h3>{user.age} years old</h3>
        </div>
      ))}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default HomePage;
