import * as types from '../actions/actionTypes';

const initialState = {
    sort: 'title', //current sort method from MainContainer
    eventData: '', //Data from MainContainer

    title: '', //createEvent data DO WE EVEN NEED THIS??
    date: '',
    start_time: '',
    end_time: '',
    activity_type: '',
    num_participants: '',
    participants:'',
    location: ''
};

const eventReducer = (state = initialState, action) =>{

  switch (action.type) {
    case types.SET_DATA:{ //change eventData that is being displayed : MainContainer

    };
    case types.SET_SORT_TYPE:{ //change SORT State: MainContainer

    }
    case types.NEW_EVENT: { //a new event has entered. Add this event to EventData 

    }
    
    default: {
        return state;
    }
  }

};

export default eventReducer;