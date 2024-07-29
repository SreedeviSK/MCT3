const router=require('express').Router()
const textdata= require('../Model/crudSchema')

//add/create data - done
router.post('/adddata',async(req,res)=>{
    console.log("Input data : ",req.body);
    try{
        const newData= new textdata({username:req.body.username, email:req.body.email, password:req.body.password,age:req.body.age});
        // const newData = new textdata(req.body)
        console.log("new data",newData);
        // await newData.validate();
        const savedData = await newData.save();
        console.log("saveddata",savedData);
        // const savedData = await textdata.create(req.body)
        console.log("saved Data : ****",savedData);
        res.status(200).json({message:"Data added : ", result:savedData})
    }catch(err){
        res.status(500).json({error:err.message})

    }
})

//get all data - done
router.get('/alldata',async(req,res)=>{
    try{
        const allData = await textdata.find()
        res.status(200).json({AllData: allData})
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

//update data -  done
router.put("/updatedata/:id",async(req,res)=>{

    try{
        const updatedData = await textdata.findByIdAndUpdate(req.params.id,{$set:{...req.body}},{new:true})
        res.status(200).json({UpdatedData : updatedData})
        console.log("updated data", updatedData);
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

//delete data - done
router.delete("/deletedata/:id",async(req,res)=>{
    try{
        await textdata.findByIdAndDelete(req.params.id)
        res.status(200).json("Data deleted....")
    }catch(err){
        res.status(500).json({error:err.message})
    }
})
//mongoose get data by condition
router.get('/databycondition',async(req,res)=>{
    console.log(req.query);
    try{
        const outputData = await textdata.find({
            age:{$in:[20,23]}
        });
        res.status(200).json({DataOutput: outputData})
    }catch{
        res.status(500).json({error:err.message})
    }
})
router.get('/databyquery',async(req,res)=>{
    console.log(req.query);
    try{
        const outputData = await textdata.findOne({
            email:req.query.email
        });
        res.status(200).json({DataOutput: outputData})
    }catch{
        res.status(500).json({error:err.message})
    }
})

module.exports=router