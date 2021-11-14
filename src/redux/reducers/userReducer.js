import authActionTypes from "../actions/authActionTypes";

const userReducer = (
  user = {
    isAuthenticated: false,
    user: {},
  },
  action
) => {
  let newUserState;

  switch (action.type) {
    case authActionTypes.userIsLogged:
      newUserState = {
        isAuthenticated: true,
        user: action.user,
      };
      break;

    case authActionTypes.loginUser:
      newUserState = {
        isAuthenticated: true,
        user: action.user,
      };
      break;

    case authActionTypes.logoutUser:
      newUserState = {
        isAuthenticated: false,
        user: {},
      };
      break;

    case authActionTypes.registerUser:
      newUserState = {
        isAuthenticated: true,
        user: action.user,
      };
      break;

    default:
      newUserState = user;
      break;
  }

  return newUserState;
};

export default userReducer;
