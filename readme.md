# pow-router

> A mini framework to build single page applications

> File size is smaller than 33KB, and only 12KB after gzipped

## Feature

* support hash mode and history mode

* basic component class which contains props, states and simple lifecycle

* async component loader

* compatible with es5 and ie8


## Take a try

### See some demo:

```shell
git clone https://github.com/wisdom-yzh/pow-router.git
cd ./pow-router
npm install && npm start
```

### Build it myself

```shell
npm install && npm run build
```

### Load it by script label

```html
<script src="//router.powerpigger.cc/dist/pow-router.js"></script>
```

### use it in your project

```javascript
import pow from 'pow-router';
```

## Manual

### Config and start

```javascript
// You need to set at least one router before start the framework
pow.config({
  routerBaseUrl: '',   // router base url
  resourceBaseUrl: '', // resource base url
  rootScope: '#main',  // root scope element
  routers: {},         // router table, supports pattern symbol
  routeType: 'history' // hash or history, default history if support
});

// Start it!
pow.start();
```

### Url redirect

```javascript
// redirect
pow.router.redirect(
  '/hello', // url path
  {},       // params in querystring
  true      // need history or not
);

// history go back
pow.router.back();
```

### Component

```javascript
// definition a component
pow.Component('ComponentName', {

  // template to render
  template: `
    <div>{{data}}</div>
  `,

  // do something common in this function
  onCreate() {

  }

  // trigger when render, call next to render
  // data can be adjusted in this method
  onRender(data, next) {
    next(data);
  }

  // when onStart is called, the template has been rendered to browser
  // bind events and do something in onCreate
  onStart(rootElement) {

  }

  // release resource and variables in onStop
  onStop(rootElement) {

  }

  // a hook before render is called
  // we can handle data in this function so that data template is more simple
  // default is 'next(data)'
  onRender(data, next) {
    next(data);
  }
});
```

### Component Lifecycle

* Lifecycle when router change

> * (previous component) onStop

> * (current  component) onCreate

> * (current component) onRender

> * (current component) onStart

* Lifecycle when use setState

> * onStop

> * onRender

> * onStart
