import * as types from '../actions/actionTypes.js';

const initialState = {
    username: ''

};

const usersReducer = (state = initialState, action) =>{

  switch (action.type) {
    case types.WHATACTIONAREWEDOING:{

    }
    
    default: {
        return state;
    }
  }

};

export default usersReducer;