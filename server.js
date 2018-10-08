import express from 'express'
import path from 'path'
import { strict } from 'assert';

const port = process.env.PORT || 4000
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('http://localhost:' + port)
  }
});
