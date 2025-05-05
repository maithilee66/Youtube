import express from 'express';
import dotenv from 'dotenv';

import { ConnectDB } from './config/db.config.js';
import userRoutes from './routes/user.routes.js';


const app =express();

dotenv.config();
ConnectDB()

app.use("/api/v1/users", userRoutes)

const port = process.env.PORT || 3000;


app.listen(port , ()=>{console.log('server running..')})