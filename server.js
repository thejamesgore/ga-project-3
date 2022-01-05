import express from 'express'
import router from './config/router.js'
import { connectDb } from './db/helpers.js'
import dotenv from 'dotenv'
import cors from 'cors'

let port = process.env.PORT

dotenv.config()

const app = express()
app.use(cors())

app.use(express.json())

app.use('/api', router)

async function startServer() {
  try {
    await connectDb()
    console.log('🤖 Mongoose is connected')
    app.listen(port, () =>
      console.log(`🤖 Listening on Port: ${process.env.PORT}`)
    )
  } catch (err) {
    console.log('🤖 Oh no something went wrong', err)
  }
}

startServer()
