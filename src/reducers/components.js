import { defaultComponentsState, componentsArray } from '../config';

export default function components(state = defaultComponentsState, action) {
  switch (action.type) {
  case 'ADD_COMPONENT':
    if (componentsArray.indexOf(action.componentId) > -1) {
      return {
        ...state,
        list: [
          ...state.list,
          action.componentId,
        ],
      };
    }
    return state;
  case 'REMOVE_COMPONENT':
    const index = state.components.indexOf(action.componentId);
    return {
      ...state,
      list: [
        ...state.activeFlags.slice(0, index),
        ...state.activeFlags.slice(index + 1),
      ],
    };
  default:
    return state;
  }
}
