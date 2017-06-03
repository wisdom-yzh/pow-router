import router from 'pow-router';
import store from './store'

router.config({
  routerBaseUrl: '/sensai',
  routers: {
    '/': 'Articles',
    '/article/:id': 'Details'
  }
}).start();

store.subscribe(function() {
  router.current.setState({ data: store.getState()});
});

window.store = store

import './components/articles';
import './components/details';
