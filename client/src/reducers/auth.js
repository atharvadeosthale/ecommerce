import { SET_USER, UNSET_USER } from "../actions/types";
import { setAuthToken } from "../utils/setToken";

const initialState = {
  isAuth: false,
  data: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      setAuthToken(action.payload.token);
      return { isAuth: true, data: action.payload };
    case UNSET_USER:
      setAuthToken(null);
      localStorage.removeItem("token");
      return { isAuth: false, data: null };
    default:
      return state;
  }
}
