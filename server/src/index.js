import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db';
import authRouter from './routers/authRouter.js';
connectDB(); // Connect to MongoDB

const app = express(); // Create an Express application
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.use('/api/auth', authRouter); // Use the auth router for authentication routes

app.get('/',(req,res)=>{
    res.status(200).send('MERN Template Server');
});

app.listen(process.env.PORT||3000,()=>{
    console.log(`Server is running on port ${process.env.PORT||3000}`);
});