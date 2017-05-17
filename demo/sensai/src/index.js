import router from 'pow-router';

router.config({
  routerBaseUrl: '/sensai',
  routers: {
    '/': 'Articles',
    '/article/:id': 'Details'
  }
}).start();

require('./articles');
require('./details');