# pow-router

> A mini framework to build single page applications

> File size is smaller than 33KB, and only 12KB after gzipped

## Feather

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
// You need to set at least one router before start the frameword
pow.config({
	
});

// Start it!
pow.start();
```

### Url redirect

```javascript
// redirect
pow.router.redirect(
	'/hello',	// url path 
	{},			// params in querystring
	true		// need history or not
);

// history go back
pow.router.back();
```

### Component
