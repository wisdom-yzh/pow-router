require(['pow'], function(pow) {
  pow.Component('App', {
    template: '<h1>This is the App Component!</h1>\
      <p>This component is loaded by <code>require.js</code></p>\
      <p>Because <code>require.js</code> is stronger and more common, if your project has contained <code>require.js</code>, you can use it to load components!</p>\
    '
  });
});
