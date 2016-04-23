import { defaultSearchState } from '../config';

export default function search(state = defaultSearchState, action) {
  switch (action.type) {
  case 'UPDATE_SEARCH_VALUE':
    return {
      ...state,
      value: action.value,
    };
  default:
    return state;
  }
}
