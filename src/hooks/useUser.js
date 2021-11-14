import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  userLogoutAction,
  userIsLoggedAction,
} from "../redux/actions/actionCreators";

import {
  loginThunk,
  registerUserThunk,
  loadAllUsersThunk,
} from "../redux/thunk/userThunk";

const useUser = () => {
  const dispatch = useDispatch();
  const { user, social } = useSelector((store) => store);

  const loginUser = (receivedUser) => {
    dispatch(loginThunk(receivedUser));
  };

  const registerUser = (receivedUser) => {
    dispatch(registerUserThunk(receivedUser));
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    dispatch(userLogoutAction());
  };

  const userIsLogged = useCallback(() => {
    const checkUserLogged = JSON.parse(localStorage.getItem("user"));

    if (checkUserLogged) {
      const userData = jwtDecode(checkUserLogged.token);
      dispatch(userIsLoggedAction(userData));
    }
  }, [dispatch]);

  const loadAllUsers = useCallback(() => {
    dispatch(loadAllUsersThunk());
  }, [dispatch]);

  return {
    user,
    social,
    loginUser,
    registerUser,
    logoutUser,
    userIsLogged,
    loadAllUsers,
  };
};

export default useUser;
