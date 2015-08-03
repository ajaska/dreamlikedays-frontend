import { ADD_ENTRY } from '../constants/ActionTypes';

export function addEntry(title, body) {
  return {
    type: ADD_ENTRY,
    title,
    body
  };
}
