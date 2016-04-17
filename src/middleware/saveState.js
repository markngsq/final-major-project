export default store => next => action => {
  localStorage.setItem('appState', JSON.stringify(store.getState()));
  let result = next(action);
  return result;
}
