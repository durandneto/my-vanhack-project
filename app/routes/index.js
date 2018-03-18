import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import configureStore from 'store/configureStore'


import App from 'containers/App'
import Home from 'containers/Home'
import StoreProducts from 'containers/StoreProducts'
import Checkout from 'containers/Checkout'

export default function(history) {
  return (
    <Router history={history}>
        <Route path="/" component={App} >
        	<Route path='store/:storeName/:storeId' component={StoreProducts} />
        	<Route path='checkout' component={Checkout} />
        	<IndexRoute component={Home} />
        </Route>
    </Router>
  )
}
