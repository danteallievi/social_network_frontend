import authActionTypes from "./authActionTypes";
import socialActionTypes from "./socialActionTypes";

export const userLoginAction = (user) => ({
  type: authActionTypes.loginUser,
  user,
});

export const userLogoutAction = () => ({
  type: authActionTypes.logoutUser,
});

export const userIsLoggedAction = (user) => ({
  type: authActionTypes.userIsLogged,
  user,
});

export const registerUserAction = (user) => ({
  type: authActionTypes.registerUser,
  user,
});

export const loadAllUsersAction = (users) => ({
  type: socialActionTypes.loadAllUsers,
  users,
});

export const addFriendAction = (id) => ({
  type: socialActionTypes.addFriend,
  id,
});
