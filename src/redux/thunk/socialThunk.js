import axios from "axios";

import { loadAllUsersAction, addFriendAction } from "../actions/actionCreators";

const apiUrl = process.env.REACT_APP_API_URL;
let local;

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

export const addFriendThunk = (id) => async (dispatch) => {
  try {
    local = JSON.parse(localStorage.getItem("user"));
    const response = await axios.post(`${apiUrl}social/friends/${id}`, null, {
      headers: { Authorization: `Bearer ${local.token}` },
    });
    if (response.status === 200) {
      dispatch(addFriendAction(response.data.user));
    }
  } catch (error) {}
};
