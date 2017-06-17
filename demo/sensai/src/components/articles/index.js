import pow from 'pow-router';
import Loading from '../loading';
import { actionFetchApi } from '../../store/actions';
import { API_PREFIX, REQUEST_TYPE, ACTION_TYPE } from '../../store/consts';

import './index.scss';

let scrollY = 0;

pow.Component('Articles', {

  template: `
    <div class="container">
      {{if is_fetching}}${Loading}{{/if}}
      {{if list && list.length}}
        {{each list as article}}
        <article class="article ib" data-id="{{article.id}}">
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
      is_fetching: data.list.is_fetching || false,
      list: data.list.data.map(row => ({
        ...row, 
        id: row.linkurl.split('/').slice(-1)[0]
      }))
    });
    window.scrollTo(0, scrollY);
  },

  onCreate() {
    // bind scroll
    this.__onScroll = this.__onScroll.bind(this);
    // fetch data
    const state = window.store.getState();
    if (state.list && state.list.data && !state.list.data.length) {
      window.store.dispatch(actionFetchApi(ACTION_TYPE.SENSAI_LIST, {
        offset: 0
      }));
      return;
    }
    this.state = { ...this.state, ...state };
  },

  onStart() {
    window.addEventListener('scroll', this.__onScroll);
    document.querySelector('.container') &&
    document.querySelector('.container').addEventListener(
      'click', this.__onClickList, true
    );
  },

  onStop() {
    window.removeEventListener('scroll', this.__onScroll);
    document.querySelector('.container') && 
    document.querySelector('.container').removeEventListener(
      'click', this.__onClickList, true
    );
  },

  __onScroll() {
    if (window.innerHeight + document.body.scrollTop >= 
        document.body.scrollHeight - 30 &&
        !this.state.list.is_fetching) {
      window.store.dispatch(actionFetchApi(ACTION_TYPE.SENSAI_LIST, {
        offset: this.state.list.data.length / 10
      }));
    }
    scrollY = document.body.scrollTop;
  },

  __onClickList(e) {
    let target = e.target;
    while (true) {
      let articleId = target.getAttribute('data-id')
      if (articleId) {
        pow.router.redirect(`/article/${articleId}`);
        break;
      }
      target = target.parentNode;
    }
  }

});
