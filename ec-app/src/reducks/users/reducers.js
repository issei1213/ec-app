import * as Actions from './actions';
import initialState from '../store/initialState';

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case action.SIGN_IN:
      return {
        ...state,
        ...action.payload
      }
      default:
        return state
  }
}