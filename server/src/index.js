import express from 'express';

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send('MERN Template Server');
});

app.listen(process.env.PORT||3000,()=>{
    console.log(`Server is running on port ${process.env.PORT||3000}`);
});