import userReducer from "./userReducer";
import authActionTypes from "../actions/authActionTypes";

describe("Given a userReducer reducer", () => {
  describe("When it receives a undefined action", () => {
    test("Then it should return the default user", () => {
      const initialState = {
        isAuthenticated: false,
        user: {},
      };
      const action = {
        type: "test",
      };

      const user = userReducer(initialState, action);

      expect(user).toEqual(initialState);
    });
  });

  describe("When it receives a userIsLogged action", () => {
    test("Then it should return the user with isAuthenticated true", () => {
      const expectedState = {
        isAuthenticated: true,
        user: {
          name: "test",
          age: "test",
          password: "test",
          image: "test",
        },
      };
      const action = {
        type: authActionTypes.userIsLogged,
        user: {
          name: "test",
          age: "test",
          password: "test",
          image: "test",
        },
      };

      const user = userReducer(expectedState, action);

      expect(user).toEqual(expectedState);
    });
  });

  describe("When it receives a logoutUser action", () => {
    test("Then it should return a empty user with isAuthenticated false", () => {
      const expectedState = {
        isAuthenticated: false,
        user: {},
      };
      const action = {
        type: authActionTypes.logoutUser,
      };

      const user = userReducer(expectedState, action);

      expect(user).toEqual(expectedState);
    });
  });
  describe("When it receives a registerUser action", () => {
    test("Then it should return the user with isAuthenticated true", () => {
      const expectedState = {
        isAuthenticated: true,
        user: {
          name: "test",
          age: "test",
          password: "test",
          image: "test",
        },
      };
      const action = {
        type: authActionTypes.registerUser,
        user: {
          name: "test",
          age: "test",
          password: "test",
          image: "test",
        },
      };

      const user = userReducer(expectedState, action);

      expect(user).toEqual(expectedState);
    });
  });
});
