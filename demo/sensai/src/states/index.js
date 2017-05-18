import redux from 'redux';

import reducers from './reducers';
import actions from './actions';

const store = redux.createStore();

export {
  store,
  reducers,
  actions
};