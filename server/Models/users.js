const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },
})

const usermodels = mongoose.model("users",userschema);
module.exports = usermodels