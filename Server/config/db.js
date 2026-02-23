import mongoose from "mongoose";

const db = async () =>{
   try{
     const connectDB =await mongoose.connect(process.env.MONGODB_URI)
    // console.log(connectDB)
    console.log("✅ Database connected successfully")
   }
   catch(error)
   {
    console.log("Connection Faild !!! " , error)
   }
}

export default db;