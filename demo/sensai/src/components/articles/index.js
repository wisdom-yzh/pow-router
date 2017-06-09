import router from 'pow-router';
import Loading from '../loading';
import { actionFetchApi } from '../../store/actions';
import { API_PREFIX, REQUEST_TYPE, ACTION_TYPE } from '../../store/consts';

import './index.scss';

router.Component('Articles', {

  template: `
    <div class="container">
      {{if !list.data.length && list.is_fetching}}${Loading}{{/if}}
      {{if list.data && list.data.length}}
        {{each list.data as article}}
        <article class="article ib">
          <section class="left">
            <h3 class="title">{{article.title}}</h3>
            <p class="abstract">{{article.abstract}}</p>
            <p class="category">from {{article.category}}</p>
          </section>
          <section class="right">
            <div class="head-pic">
              <img src="${API_PREFIX}{{article.imgurl}}">
            </div>
            <p class="author">by {{article.author}}</p>
          </section>
        </article>
        {{/each}}
      {{/if}}
    </div>
  `,

  onRender(data, next) {
    next({
      list: data.list
    });
  },

  onCreate() {
    // fetch data
    const state = window.store.getState();
    if (state.list && state.list.data && !state.list.data.length) {
      window.store.dispatch(actionFetchApi(ACTION_TYPE.SENSAI_LIST, {
        offset: 0
      }));
    }
    // scroll event handler
    
  },

  onStart() {
  
  },

  onStop() {

  }

});
