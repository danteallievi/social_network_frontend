import { useDispatch, useSelector } from "react-redux";

import { loginThunk } from "../redux/thunk/userThunk";

const useUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);

  const loginUser = (user) => {
    dispatch(loginThunk(user));
  };

  return {
    user,
    loginUser,
  };
};

export default useUser;
