import express from 'express'
import dotenv from 'dotenv';
import db from './config/db.js';
import authRouter from './route/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from "cors"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000;
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())



app.use("/api/auth" , authRouter)

app.get("/" , (req,res) =>{
    res.json("Server is running");
})

app.listen(PORT , ()=>{
    console.log(`Backend is running on port ${PORT}`);
    db();
})