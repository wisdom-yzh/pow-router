import { combineReducers } from 'redux';
import { API_PREFIX, REQUEST_TYPE, ACTION_TYPE, requestStatus } from './consts';

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
    // convert all image src
    const contentElem = document.createElement('div');
    contentElem.innerHTML = decodeURIComponent(action.data.content);
    contentElem.querySelectorAll('img').forEach(el => {
      const imgSrc = el.getAttribute('src');
      if (imgSrc.indexOf('http') === -1)
      el.setAttribute('src', API_PREFIX + imgSrc);
    });
    return {
      ...store,
      is_fetching: false,
      data: {
        ...store.data,
        [action.params.id]: {
          ...action.data,
          content: contentElem.innerHTML
        }
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
