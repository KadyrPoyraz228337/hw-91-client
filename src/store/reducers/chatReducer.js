
const INITIAL_STATE = {
  online: null,
  messages: []
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case  'USERS_ONLINE':
      return {...state, online: action.data};
    case 'SEND_MESSAGE':
      return {...state, messages: [action.message, ...state.messages]};
    case 'GET_MESSAGES':
      return {...state, messages: action.messages};
    default: return state;
  }
};

export default chatReducer;