import { SET_LOADING, UNSET_LOADING } from "../actions/types";

const initialState = {
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case UNSET_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
}
