const mongoose = require('mongoose')

const crudSchema = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    age:{type:Number}

})
module.exports=mongoose.model('cruddata',crudSchema)

