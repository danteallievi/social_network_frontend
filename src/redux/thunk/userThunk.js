import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  userLoginAction,
  registerUserAction,
  loadAllUsersAction,
} from "../actions/actionCreators";

const apiUrl = process.env.REACT_APP_API_URL;

let local;
export const loginThunk = (user) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}user/login`, user);
    if (response.status === 200) {
      const token = response.data.token;
      const user = await jwtDecode(token);
      dispatch(userLoginAction(user));
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

export const loadAllUsersThunk = () => async (dispatch) => {
  try {
    local = JSON.parse(localStorage.getItem("user"));
    const response = await axios.get(`${apiUrl}social`, {
      headers: { Authorization: `Bearer ${local.token}` },
    });
    if (response.status === 200) {
      dispatch(loadAllUsersAction(response.data));
    }
  } catch (error) {}
};
