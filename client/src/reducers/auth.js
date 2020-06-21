import { SET_USER, UNSET_USER } from "../actions/types";

const initialState = {
  isAuth: false,
  data: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { isAuth: true, data: action.payload };
    case UNSET_USER:
      return { isAuth: false, data: null };
    default:
      return state;
  }
}
