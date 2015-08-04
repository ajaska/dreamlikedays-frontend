import { ADD_ENTRY, FETCH_ENTRIES } from '../constants/ActionTypes';

const initialState = [];

export default function entries(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTRY:
      return [{
        id: (state.length === 0) ? 0 : state[0].id + 1,
        title: action.title,
        body: action.body
      }, ...state];
    case FETCH_ENTRIES:
      return action.entries;
    default:
      return state;
  }
}
