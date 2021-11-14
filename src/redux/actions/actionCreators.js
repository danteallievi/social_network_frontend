import authActionsTypes from "./authActionsTypes";

export const userLoginAction = (user) => ({
  type: authActionsTypes.loginUser,
  user,
});

export const userLogoutAction = () => ({
  type: authActionsTypes.logoutUser,
});

export const userIsLoggedAction = (user) => ({
  type: authActionsTypes.userIsLogged,
  user,
});
