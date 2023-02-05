require("dotenv").config();
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const PORT = process.env.PORT || 8000
const products_routes = require('./routes/routes_store')
app.get('/', (req, res) => {
  res.send('HI this is live')
})
// middleware
app.use('/api/products', products_routes)
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Started in port: ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
