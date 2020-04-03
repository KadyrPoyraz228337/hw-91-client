import {push} from 'connected-react-router';
import {CONNECT_USER, SEND_MESSAGE, SEND_MESSAGE_FAILURE, GET_MESSAGES} from "./actionTypes";

export const connectUserSuccess = user => ({type: CONNECT_USER, user});
export const getMessagesSuccess = () => ({type: GET_MESSAGES});
export const sendMessageSuccess = data => ({type: SEND_MESSAGE, data});
export const sendMessageFailure = error => ({type: SEND_MESSAGE_FAILURE, error});

export let webSocket;

export const websocketInit = () => async (dispatch, getState) => {
  if (getState().users.user) {
    webSocket = new WebSocket('ws://localhost:8000/chat');
    const user = {...getState().users.user};
    delete user.token;

    webSocket.onopen = () => {
      webSocket.send(JSON.stringify(connectUserSuccess(user)));
      webSocket.send(JSON.stringify(getMessagesSuccess()))
    };

    webSocket.onmessage = (msg) => {
      const action = JSON.parse(msg.data);

      dispatch(action);
    };
  } else {
    dispatch(push('/login'));
  }
};

export const closeWsConnection = () => {
  webSocket.close();
};

export const sendMessage = data => dispatch => {
  try {
    webSocket.send(JSON.stringify(sendMessageSuccess(data)))
  } catch (e) {
    dispatch(sendMessageFailure(e))
  }
};