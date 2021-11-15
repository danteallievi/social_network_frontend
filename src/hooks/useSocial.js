import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadAllUsersThunk } from "../redux/thunk/userThunk";

const useUser = () => {
  const dispatch = useDispatch();
  const { social } = useSelector((store) => store);

  const loadAllUsers = useCallback(() => {
    dispatch(loadAllUsersThunk());
  }, [dispatch]);

  return {
    social,
    loadAllUsers,
  };
};

export default useUser;
