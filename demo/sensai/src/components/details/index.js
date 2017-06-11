import pow from 'pow-router';
import { actionFetchApi } from '../../store/actions';
import { API_PREFIX, REQUEST_TYPE, ACTION_TYPE } from '../../store/consts';

import './index.scss'

pow.Component('Details', {

  template: `{{@content}}`,

  onRender(data, next) {
    next({
      is_fetching: data.detail.is_fetching || false,
      article_id: data.id,
      content: data.detail.data[data.id]
    });
  },

  onCreate() {
    const state = window.store.getState();
    const article_id = this.props.id;
    if (!state.detail || !state.detail.data.length ||
       !state.detail.data[article_id]) {
      window.store.dispatch(actionFetchApi(ACTION_TYPE.SENSAI_DETAIL, {
        id: article_id
      }));
    }
    this.state = { ...this.state, state }
  },

  onStart() {

  },

  onStop() {

  }

});
