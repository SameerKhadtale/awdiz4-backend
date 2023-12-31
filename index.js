import express from 'express';
import router from './Routes/index.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/' , (req, res) => {
    res.send("Welcome to Sameer's Backend server")
})
app.use("/api/v1", router)

mongoose.connect(process.env.MONGOURL).then(()=>console.log("Database Connected.."))
app.listen(8000, ()=>{console.log("App is running on port 8000..")})









// app.get("/",function (req,res){ res.send("Hello Everyone..")})// app.get("/hello", Hello);
 // app.use(express.json());
// import { Hello } from './Controllers/GlobalControllers.js'
// const app = express() // 000."))
// app.use((req,res, next) => {
//     console.log("hi from middleware use")
//     next();
// })