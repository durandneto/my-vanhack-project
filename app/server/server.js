import Express from 'express'
import path from 'path'
import compression from 'compression'
import clearRequireCacheOnChange from './lib/clearRequireCacheOnChange'
import request from 'request';
var bodyParser = require('body-parser')

let server = new Express()
let port = process.env.PORT || 3000


server.use(compression())

// parse application/x-www-form-urlencoded
// server.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
server.use(bodyParser.json())


if (process.env.NODE_ENV === 'production') {
  server.use(Express.static(path.join(__dirname, '../..', 'public')))
} else {
  server.use('/assets', Express.static(path.join(__dirname, '..', 'assets')))

  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackConfig = require(path.join(__dirname, '../..', 'webpack.config'))
  const webpack = require('webpack')
  const compiler = webpack(webpackConfig)

  server.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    serverSideRender: true,
    stats: {
      colors: true,
      hash: true,
      timings: true, 
      chunks: false
    }
  }))
  server.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr'
  }))

  clearRequireCacheOnChange({ rootDir: path.join(__dirname, '..') })
}

server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')

server.get('/Store/search/term/:term', (req, res)=> {
  

  request.get(
    {
      url:'http://api-vanhack-event-sp.azurewebsites.net/api/v1/Store/search/' + req.params.term,
      // timeout: 100
      timeout: 600000
    }, 
    function(error,response,body){ 
    if ( response && response.statusCode === 200 ){
      res.json(JSON.parse(body))
    } else{
      if ( response && response.statusCode ){
        res.status(response.statusCode || 500).json(JSON.parse(body))
      } else {
        res.status(500).json({ error: 'request timeout' })
      }
    }
  })

})

server.get('/Store/:storeId/products', (req, res)=> {


  request.get(
    {
      url:'http://api-vanhack-event-sp.azurewebsites.net/api/v1/Store/'+ req.params.storeId + '/products',
      // timeout: 100
      timeout: 600000
    }, 
    function(error,response,body){ 
    if ( response && response.statusCode === 200 ){
      res.json(JSON.parse(body))
    } else{
      if ( response && response.statusCode ){
        res.status(response.statusCode || 500).json(JSON.parse(body))
      } else {
        res.status(500).json({ error: 'request timeout' })
      }
    }
  })

})

server.get('/Store', (req, res)=> {


  request.get(
    {
      url:'http://api-vanhack-event-sp.azurewebsites.net/api/v1/Store',
      // timeout: 100
      timeout: 600000
    }, 
    function(error,response,body){ 
    if ( response && response.statusCode === 200 ){
      res.json(JSON.parse(body))
    } else{
      if ( response && response.statusCode ){
        res.status(response.statusCode || 500).json(JSON.parse(body))
      } else {
        res.status(500).json({ error: 'request timeout' })
      }
    }
  })

})


server.post('/auth', (req, res)=> {

  request.post(
    {
      url:'http://api-vanhack-event-sp.azurewebsites.net/api/v1/Customer/auth',
      form: req.body,
      // timeout: 100
      timeout: 600000
    }, 
    function(error,response,body){ 
    if ( response && response.statusCode === 200 ){
      res.json(body)
    } else{
      if ( response && response.statusCode ){
        res.status(response.statusCode || 500).json(JSON.parse(body))
      } else {
        res.status(500).json({ error: 'request timeout' })
      }
    }
  })

})

server.get('*', (req, res, next)=> {
  require('./middlewares/universalRenderer').default(req, res, next)
})
server.use((err, req, res, next)=> {
  console.log(err.stack)
  // TODO report error here or do some further handlings
  res.status(500).send("something went wrong...")
})

console.log(`Server is listening to port: ${port}`)
server.listen(port)
