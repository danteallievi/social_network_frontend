import { useEffect } from "react";
import Logout from "../../components/Forms/Auth/Logout";
import Usercard from "../../components/Usercard/Usercard";
import useSocial from "../../hooks/useSocial";

const HomePage = () => {
  const { social, loadAllUsers, addFriend } = useSocial();

  const handleAddToFriend = (id) => {
    addFriend(id);
  };

  useEffect(() => {
    loadAllUsers();
  }, [loadAllUsers]);
  return social.length ? (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl">Home</h1>
      <Logout />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10">
        {social.map((user) => (
          <Usercard
            handleFriendButton={() => handleAddToFriend(user.id)}
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            age={user.age}
          />
        ))}
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default HomePage;
