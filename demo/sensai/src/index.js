import pow from 'pow-router'
import store from './store'

// set router
pow.config({
  routerBaseUrl: '/sensai',
  routers: {
    '/': 'Articles',
    '/article/:id': 'Details'
  }
}).start()

// set redux store
store.subscribe(() => {
  pow.current.setState({ ...store.getState()})
})
window.store = store

// set font-size
const resizeFontSize = () => {
  const rate = 100 * document.body.clientWidth / 375
  document.documentElement.style.fontSize = rate + 'px'
}
document.onreadystatechange = () => {
  if (document.readyState == 'complete') {
    resizeFontSize()
    window.onresize = resizeFontSize
  }
}

import 'normalize.css'
import './style.css'

import './components/articles'
import './components/details'
