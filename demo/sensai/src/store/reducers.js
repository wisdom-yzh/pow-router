import { combineReducers } from 'redux';
import { REQUEST_TYPE, ACTION_TYPE, requestStatus } from './consts';

/**
 * sensai article details
 */
function detail(store = {
  is_fetching: false,
  data: {}
}, action) {
  const type = requestStatus(ACTION_TYPE.SENSAI_DETAIL);
  if (action.type === type.START) {
    return {
      ...store,
      is_fetching: true
    };
  } else if (action.type === type.ERROR) {
    return {
      ...store,
      is_fetching: false,
      error: action.error
    };
  } else if (action.type === type.SUCCESS) {
    return {
      ...store,
      is_fetching: false,
      data: {
        ...store.data,
        [action.params.id]: decodeURIComponent(action.data.content)
      }
    };
  }
  return store;
}

/**
 * sensai article list
 */
function list(store = {
  is_fetching: false,
  data: []
}, action) {
  const type = requestStatus(ACTION_TYPE.SENSAI_LIST);
  if (action.type === type.START) {
    return {
      ...store,
      is_fetching: true
    };
  } else if (action.type === type.ERROR) {
    return {
      ...store,
      is_fetching: false,
      error: action.error
    };
  } else if (action.type === type.SUCCESS) {
    return {
      data: store.data.concat(action.data),
      is_fetching: false,
      error: null
    };
  }

  return store;
}

export default combineReducers({
  detail,
  list
});
