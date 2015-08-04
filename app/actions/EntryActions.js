import { ADD_ENTRY, FETCH_ENTRIES } from '../constants/ActionTypes';

import 'babel/polyfill';
import 'isomorphic-fetch';

export function addEntry(title, body) {
  return {
    type: ADD_ENTRY,
    title,
    body
  };
}

export function fetchEntries() {
  return dispatch =>
    fetch("http://localhost:5000/entries")
    .then( res => res.json() )
    .then( res => dispatch({
      type: FETCH_ENTRIES,
      entries: res.data
    }))
}
