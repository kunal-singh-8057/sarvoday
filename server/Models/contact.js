const mongoose = require("mongoose");

const contactschema = mongoose.Schema({
    
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

    message:{
        type:String,
        required:true
    },
})

const contactmodels = mongoose.model("contact",contactschema);
module.exports = contactmodels;
