const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
app.use(cors())
const dotenv= require('dotenv')
const appRoute= require('./Router/crudRouter')
dotenv.config()
mongoose.connect(process.env.mongoURL).then(()=>{
    console.log("database is connected");
}).catch((err)=>{
    console.log(err.message);
})
app.use(express.json())
app.use('/api',appRoute)
app.listen(5000,()=>{
    console.log("Port 5000 is connected");
})