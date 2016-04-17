import { combineReducers } from 'redux';
import { defaultState } from '../config';

export default function app(state = defaultState, action) {
  switch (action.type) {
  default:
    return state;
  }
}
