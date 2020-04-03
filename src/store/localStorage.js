import {LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS} from "./actions/actionTypes";

export const saveToLocalStorage = state => {
  try {
    localStorage.setItem(
      'state',
      JSON.stringify(state)
    )
  } catch (e) {
    console.log(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const state = localStorage.getItem('state');

    if(!state) return undefined;

    return JSON.parse(state);
  } catch (e) {
    return undefined
  }
};

const actions = [LOGOUT_USER_SUCCESS, LOGIN_USER_SUCCESS];

export const localStorageMiddleware = store => next => action => {
  let result = next(action);

  if(actions.includes(action.type)) {
    saveToLocalStorage({
      users: {
        user: store.getState().users.user
      }
    })
  }
  return result
};