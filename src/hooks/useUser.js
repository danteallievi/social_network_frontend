import { useDispatch, useSelector } from "react-redux";

import { userLogoutAction } from "../redux/actions/actionCreators";
import { loginThunk } from "../redux/thunk/userThunk";

const useUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);

  const loginUser = (user) => {
    dispatch(loginThunk(user));
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    dispatch(userLogoutAction());
  };

  return {
    user,
    loginUser,
    logoutUser,
  };
};

export default useUser;
