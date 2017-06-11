import pow from 'pow-router';
import { actionFetchApi } from '../../store/actions';
import { API_PREFIX, REQUEST_TYPE, ACTION_TYPE } from '../../store/consts';

import './index.scss'

pow.Component('Details', {

  template: `Details`,

  onCreate() {
    const state = window.store.getState();
    const articleId = this.props.id;
    if (!state.detail || !state.detail.data.length ||
       !state.detail.data[articleId]) {
      window.store.dispatch(actionFetchApi(ACTION_TYPE.SENSAI_DETAIL, {
        id: articleId
      }));
    }
  },

  onStart() {

  },

  onStop() {

  }

});
