import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes.js';
import router from './routes/User-routes.js';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog", blogRouter);
mongoose.connect(
    'mongodb+srv://admin:Shailesh%40123@cluster0.ncrridr.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(() => 
    app.listen(5000))
    .then(() => 
    console.log("Connected To Database and Listening to Localhost 5000"))
    .catch((err)=>console.log(err));

