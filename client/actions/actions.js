import * as types from './actionTypes.js'

export const setNewLocation = location => ({
    type: types.SET_NEW_LOCATION,
    payload: location,
  });