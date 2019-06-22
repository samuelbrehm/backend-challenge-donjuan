const express = require('express')

const app = express()

const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  )

  return next()
}

// app.use(logMiddleware); para usar em todas rotas

app.get('/', logMiddleware, (req, res) => {
  // console.log(req);
  return res.status(201).json({ message: 'Hello' })
})

app.listen(3000)
