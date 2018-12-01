import types from '../constants/actionNames';
const axios = require('axios');

const initialState = {
  userID: '',
  password: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_CHANGE: {
      return {
        userID: action.payload,
        phone: action.payload,
        password: action.payload,
      }
    }

    case HANDLE_LOGIN_SUBMIT: {
      // query db and find out if they are a user
      axios.request({
        method: 'get',
        url: 'http://localhost:3000/userdata',
        data: {
          userID: '1',
        }
      })
        .then((data) => {
          return data.json();
        })
      // if so, redirect to goals progress dashboard

      // otherwise, redirect to signup page and notify "you are not signed up", along w error

      return {
        userID: state.userID,
        password: state.userID,
      }
    }
    default:
      return state;
  }
};

export default loginReducer;