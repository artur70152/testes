import { combineReducers } from 'redux';

// Reducer para o estado "user"
const initialState = {
  name: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
};


// Reducer para o estado "auth"
const authReducer = (state = false, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, auth: action.payload.auth };
      case 'LOGOUT':
        return false;
      default:
        return state;
    }
  };


  const initialStateb = {
    cargo: null
  };
  
  const userReducercargo = (state = initialStateb, action) => {
    switch (action.type) {
      case 'SET_CARGO':
        return { ...state, cargo: action.payload.cargo };
      default:
        return state;
    }
  };




export default combineReducers({
  user: userReducer,
  auth: authReducer,
  carg:userReducercargo,
});