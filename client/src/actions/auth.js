import { SET_USER, UNSET_USER } from "./types";
import { setAlert } from "./alert";
import axios from "axios";

export const loadUser = () => async (dispatch) => {
  try {
    console.log("here?");
    const res = await axios.get("/user/auth");
    dispatch({
      type: SET_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: UNSET_USER,
    });
  }
};

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

export const logout = () => (dispatch) => {
  dispatch({
    type: UNSET_USER,
  });

  dispatch(setAlert("You've been logged out!", "danger"));
};

export const signUp = (name, email, mobile, password) => async (dispatch) => {
  try {
    const res = axios.post("/user/register", { name, email, mobile, password });
    dispatch({
      type: SET_USER,
      payload: (await res).data,
    });
    await localStorage.setItem("token", (await res).data.token);
    dispatch(setAlert("Registeration Complete. You are logged in!", "success"));
  } catch (err) {
    dispatch(setAlert(err.response.data.msg, "danger"));
  }
};
