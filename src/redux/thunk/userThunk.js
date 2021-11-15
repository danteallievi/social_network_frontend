import axios from "axios";
import jwtDecode from "jwt-decode";
import { userLoginAction, registerUserAction } from "../actions/actionCreators";

const apiUrl = process.env.REACT_APP_API_URL;

export const loginThunk = (user) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}user/login`, user);
    if (response.status === 200) {
      const token = response.data.token;
      const userDecodedToken = jwtDecode(token);
      dispatch(userLoginAction(userDecodedToken));
      localStorage.setItem("user", JSON.stringify({ token: token }));
    }
  } catch (error) {}
};

export const registerUserThunk = (user) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}user/register`, user);
    if (response.status === 201) {
      dispatch(registerUserAction(user));
    }
  } catch (error) {}
};
