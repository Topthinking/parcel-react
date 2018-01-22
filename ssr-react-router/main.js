import { createServer } from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './app'

createServer((req, res) => {
  // const context = {
  //  // url:'http://www.baidu.com'
  // }

  const context = {

  }

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(`
      <!doctype html>
      <meta charset="utf-8"/>
      <div id="app">${html}</div>
    `)
    res.end()
  }
}).listen(5000)