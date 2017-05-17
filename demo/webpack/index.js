import router from 'pow-router';

router.config({
  routerBaseUrl: '/webpack',
  routers: {
    '/': 'Hello'
  }
}).start();

router.Component('Hello', {
  template: `
    <p>This is a demo using Webpack && ES6~</p>
  `
});