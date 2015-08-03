import { ADD_ENTRY } from '../constants/ActionTypes';

const initialState = [{
  title: 'whomp',
  body: 'sample entry',
  id: 0
}];

export default function entries(state = initialState, action) {
  switch (action.type) {
    case ADD_ENTRY:
      return [{
        id: (state.length === 0) ? 0 : state[0].id + 1,
        title: action.title,
        body: action.body
      }, ...state];

    default:
      return state;
  }
}
