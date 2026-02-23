import express from 'express'
import dotenv from 'dotenv';
import db from './config/db.js';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000;

app.get("/" , (req,res) =>{
    res.json("Server is running");
})

app.listen(PORT , ()=>{
    console.log(`Backend is running on port ${PORT}`);
    db();
})