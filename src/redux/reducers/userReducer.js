import authActionsTypes from "../actions/authActionsTypes";

const userReducer = (
  user = {
    isAuthenticated: false,
    user: {},
  },
  action
) => {
  let newUserState;

  switch (action.type) {
    case authActionsTypes.userIsLogged:
      newUserState = {
        isAuthenticated: true,
        user: action.user,
      };
      break;

    case authActionsTypes.loginUser:
      newUserState = {
        isAuthenticated: true,
        user: action.user,
      };
      break;

    case authActionsTypes.logoutUser:
      newUserState = {
        isAuthenticated: false,
        user: {},
      };
      break;

    default:
      newUserState = user;
      break;
  }

  return newUserState;
};

export default userReducer;
