const express = require(express)
const app     = express()
const port = 4000
app.use(logger)
app.get('/', (req, res) => {
  
})

const logger =( (req, res, next) => {
  next()
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})