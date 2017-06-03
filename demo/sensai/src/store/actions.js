import fetch from "isomorphic-fetch"
import { 
  REQUEST_TYPE, 
  getApiName, 
  requestStatus 
} from './consts'

export const actionFetchApi = (actionType, params) => dispatch => {
  const type = requestStatus(actionType);
  dispatch({ type: type.START });
  fetch(getApiName(actionType, params))
    .then(res => res.json())
    .then(data => {
      dispatch({ type: type.SUCCESS, data })
    })
    .catch(error => {
      dispatch({ type: type.ERROR, error })
    })
}
