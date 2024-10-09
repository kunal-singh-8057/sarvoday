const mongoose = require("mongoose");

const uploadschema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    subject:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },

    link:{
        type:String,
        required:true
    },
})

const uploadmodel = mongoose.model("upload",uploadschema);
module.exports = uploadmodel;