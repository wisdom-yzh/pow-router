import router from 'pow-router';
import store from './store'

// set router
router.config({
  routerBaseUrl: '/sensai',
  routers: {
    '/': 'Articles',
    '/article/:id': 'Details'
  }
}).start();

// set redux store
store.subscribe(() => {
  router.current.setState({ ...store.getState()});
});
window.store = store;

// set font-size
const resizeFontSize = () => {
  const rate = 100 * document.body.clientWidth / 375;
  document.documentElement.style.fontSize = rate + "px";
}
document.onreadystatechange = () => {
  if(document.readyState == 'complete') {
    resizeFontSize();
    window.onresize = resizeFontSize;
  }
}

window.onresize = function() {
  
};

import 'normalize.css'
import './style.css'

import './components/articles';
import './components/details';
