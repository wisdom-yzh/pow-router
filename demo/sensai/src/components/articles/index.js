import router from 'pow-router';
import { actionFetchApi } from '../../store/actions'
import { REQUEST_TYPE, ACTION_TYPE } from '../../store/consts'

import './index.scss'

router.Component('Articles', {

  template: `
    <div class="container">
      <article class="article ib">
        <section class="left">
          <h3 class="title">一次有趣的采访</h3>
          <p class="abstract">摘要: 江主席董先森连任吼不吼啊~吼啊~中央也资瓷他吗?当然啦!。。。</p>
          <p class="author">by 董先森</p>
        </section>
        <section class="right">
          <div class="head-pic">
            <img src="https://qnmob2.doubanio.com/img/files/file-1496390867.jpg?imageView2/2/q/80/w/330/h/330/format/jpg">
          </div>
          <p class="category">from 日常水贴</p>
        </section>
      </article>
    </div>
  `,

  onCreate() {
    window.store.dispatch(actionFetchApi(ACTION_TYPE.SENSAI_LIST, {
      offset: 0
    }))
  },

  onStart() {
    
  },

  onStop() {

  }

});
