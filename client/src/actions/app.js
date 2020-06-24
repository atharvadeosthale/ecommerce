import { SET_LOADING, UNSET_LOADING } from "./types";

export const setAppLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};

export const unsetAppLoading = () => (dispatch) => {
  dispatch({
    type: UNSET_LOADING,
  });
};
