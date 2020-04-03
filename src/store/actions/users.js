import axiosChat from "../../axiosConfig";
import {push} from 'connected-react-router';
import {LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS} from "./actionTypes";
import {closeWsConnection} from "./chat";

export const loginUserSuccess = user => ({type: LOGIN_USER_SUCCESS, user});
export const loginUserFailure = error => ({type: LOGIN_USER_FAILURE, error});
export const logoutUserSuccess = () => ({type: LOGOUT_USER_SUCCESS});

export const registerUser = user => async dispatch => {
  try {
    const res = await axiosChat.post('/users', user);
    dispatch(loginUserSuccess(res.data));
    dispatch(push('/'));
  } catch (e) {
    console.log(e);
    dispatch(loginUserFailure(e));
  }
};

export const loginUser = user => async dispatch => {
  try {
    const resp = await axiosChat.post('/users/sessions', user);
    dispatch(loginUserSuccess(resp.data));
    dispatch(push('/'));
  } catch (e) {
    dispatch(loginUserFailure(e))
  }
};

export const logoutUser = () => async dispatch => {
  try {
    await axiosChat.delete('/users/sessions');
    dispatch(logoutUserSuccess());
    dispatch(closeWsConnection());
    dispatch(push('/login'));
  } catch (e) {
    dispatch(push('/login'));
  }
};