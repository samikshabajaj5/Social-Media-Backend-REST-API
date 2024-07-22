console.log("hello!!!")
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';

const app=express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose.connect("mongodb+srv://samikshab004:<558M0e6WB4hABKE5>@cluster0.jxujtfg.mongodb.net/Blog").then(()=>app.listen(5000)).then(()=>console.log("Connected to database and listening to local host 5000")).catch((err)=>console.log(err));
// app.use("/",(req,res,next)=>{
//     res.send("hello world");
// })
app.listen(5000);
// 558M0e6WB4hABKE5