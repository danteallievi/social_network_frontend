import axios from "axios";
import jwtDecode from "jwt-decode";
import { userLoginAction } from "../actions/actionCreators";

const apiUrl = process.env.REACT_APP_API_URL;

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
