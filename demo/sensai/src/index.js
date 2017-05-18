import router from 'pow-router';

router.config({
  routerBaseUrl: '/sensai',
  routers: {
    '/': 'Articles',
    '/article/:id': 'Details'
  }
}).start();

require('./components/articles');
require('./components/details');