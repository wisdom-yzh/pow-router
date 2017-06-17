import pow from 'pow-router';
import Loading from '../loading';
import { actionFetchApi } from '../../store/actions';
import { API_PREFIX, REQUEST_TYPE, ACTION_TYPE } from '../../store/consts';

import './index.scss'

pow.Component('Details', {

  template: `
    <div class="article-container">
      {{if is_fetching}}
        ${Loading}
      {{else}}
        <header class="title">{{title}}</header>
        <p class="author-info">
          {{author}}&nbsp;&nbsp;<span>{{send_time}}</span>
        </p>
        <article class="content">
          {{@content}}
        </article>
      {{/if}}
    </div>
  `,

  onRender(data, next) {
    const details = data.detail.data[data.id];
    next({
      is_fetching: data.detail.is_fetching || false,
      article_id: data.id,
      ...details
    });
  },

  onCreate() {
    const state = window.store.getState();
    const article_id = this.props.id;
    if (!state.detail || !Object.keys(state.detail.data).length ||
       !state.detail.data[article_id]) {
      window.store.dispatch(actionFetchApi(ACTION_TYPE.SENSAI_DETAIL, {
        id: article_id
      }));
      return;
    }
    this.state = { ...this.state, ...state }
  }
});
