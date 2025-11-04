import mongoose from "mongoose";
// import React from 'react' 
import dotenv from "dotenv"; 

dotenv.config(); 

export const connectDB = async () => {
    await mongoose.connect(process.env.DB).then(() =>
        console.log("DB Connected succesfully..."));
}


