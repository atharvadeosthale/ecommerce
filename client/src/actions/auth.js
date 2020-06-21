import { SET_USER, UNSET_USER } from "./types";
import { setAlert } from "./alert";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("/user/login", { email, password });
    dispatch({
      type: SET_USER,
      payload: res.data,
    });
    dispatch(setAlert("Login Successful!", "success"));
  } catch (err) {
    dispatch(setAlert(err.response.data.msg, "danger"));
  }
};
