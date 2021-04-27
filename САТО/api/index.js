
/* 
For starting API server write text in console: npm run dev
For run this command you need install Node.js,npm, then: express, mongoose, cors
*/

import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors';
const app = express();
const DB_URL = 'mongodb+srv://admin:adm@sato-cluster.4clpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false
const PORT = 3000;

app.use(express.json());
app.use(cors({
  origin: '*',
}));
app.use('/api', router);
// eslint-disable-next-line
app.listen(PORT, () => console.log('Listening on port  ' + PORT));

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log("Connected to MongoDB"));
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
  }
}
startApp();
