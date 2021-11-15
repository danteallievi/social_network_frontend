import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadAllUsersThunk, addFriendThunk } from "../redux/thunk/socialThunk";

const useUser = () => {
  const dispatch = useDispatch();
  const { social } = useSelector((store) => store);

  const loadAllUsers = useCallback(() => {
    dispatch(loadAllUsersThunk());
  }, [dispatch]);

  const addFriend = (id) => {
    dispatch(addFriendThunk(id));
  };

  return {
    social,
    loadAllUsers,
    addFriend,
  };
};

export default useUser;
