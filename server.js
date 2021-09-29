import express from 'express';
import router from './config/router.js';
import { port } from './config/environment.js';
import { connectDb } from './db/helpers.js';

const app = express();

// middleware
// in between the request and our routing code (below),
// this middleware is decoding JSON
app.use(express.json());
// using the router for /api/... requests
app.use('/api', router);

async function startServer() {
  try {
    await connectDb();
    console.log('🤖 Mongoose is connected');
    app.listen(port, () => console.log(`🤖 Listening on Port: ${port}`));
  } catch (err) {
    console.log('🤖 Oh no something went wrong', err);
  }
}

startServer()