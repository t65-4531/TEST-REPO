const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const resp = req.query;
  res.send(`Hello World! ${resp}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
