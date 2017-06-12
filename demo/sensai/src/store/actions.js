import 'es6-promise/auto'
import 'isomorphic-fetch'
import {
  REQUEST_TYPE, 
  getApiName, 
  requestStatus 
} from './consts'

export const actionFetchApi = (actionType, params) => dispatch => {
  const type = requestStatus(actionType);
  dispatch({ type: type.START, params });
  fetch(getApiName(actionType, params))
    .then(res => res.json())
    .then(data => {
      dispatch({ type: type.SUCCESS, params, data })
    })
    .catch(error => {
      dispatch({ type: type.ERROR, error })
    });
}
