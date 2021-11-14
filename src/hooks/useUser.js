import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  userLogoutAction,
  userIsLoggedAction,
} from "../redux/actions/actionCreators";

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

  const userIsLogged = useCallback(() => {
    const userIsLogged = JSON.parse(localStorage.getItem("user"));

    if (userIsLogged) {
      console.log("LOGED!!!!!!!!!");
      const userData = jwtDecode(userIsLogged.token);
      dispatch(userIsLoggedAction(userData));
    }
  }, [dispatch]);

  return {
    user,
    loginUser,
    logoutUser,
    userIsLogged,
  };
};

export default useUser;
