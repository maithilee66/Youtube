import express from 'express';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';

import { ConnectDB } from './config/db.config.js';
import userRoutes from './routes/user.routes.js';


const app =express();

dotenv.config();
ConnectDB()


app.use(bodyParser.json());

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}))

app.use("/api/v1/user" , userRoutes)
// app.use("/api/v1/video" , videoRoutes)
// app.use("/api/v1/comment" , commentRoutes)

const port = process.env.PORT || 3000;


app.listen(port , ()=>{console.log('server running..')}) 