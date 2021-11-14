import socialActionTypes from "../actions/socialActionTypes";

const userReducer = (social = [], action) => {
  let newSocialState;

  switch (action.type) {
    case socialActionTypes.loadAllUsers:
      newSocialState = [...action.users];
      break;

    default:
      newSocialState = social;
      break;
  }

  return newSocialState;
};

export default userReducer;
