import authActionTypes from "./authActionTypes";

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
