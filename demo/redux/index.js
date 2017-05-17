// config redux store
window.store = Redux.createStore(Reducer.todo, []);
store.subscribe(function() {
  pow.current.setState({ todo: store.getState()});
});

// config router
pow.config({
  routerBaseUrl: '/redux',
  resourceBaseUrl: '/redux/components',
  routers: {
    '/': 'App',
    '/edit': 'Edit'
  }
}).start();