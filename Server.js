import express, { json } from 'express';
import { connect } from 'mongoose';
 
require('dotenv').config();

import routes from "./routes/TaskRoute";

import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(json());
app.use(cors());

connect(process.env.MONGO_URI).then(() => console.log('MongoDB Connected...')).catch((err) => console.log(err));

// app.get('/',(req,res) => {
//     res.send('The Brave Coders');
// })
app.use("/api", routes);
app.listen(PORT,() => console.log(`Listening at ${PORT}`));
