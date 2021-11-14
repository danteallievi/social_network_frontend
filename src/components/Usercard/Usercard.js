const Usercard = ({ id, name, age, image }) => {
  return (
    <div className="shadow-lg bg-white rounded overflow-hidden flex flex-col justify-center items-center">
      <img src={image} alt={name} className="w-full" />
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">{age} years old</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
        Add to friend
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2">
        Add to enemies
      </button>
    </div>
  );
};

export default Usercard;
