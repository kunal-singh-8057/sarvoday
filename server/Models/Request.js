const mongoose = require("mongoose");

const requsetschema = mongoose.Schema({
    
    subject:{
        type:String,
        required:true
    },

    NM:{
        type:String,
        required:true
    },


    MT:{
        type:String,
        required:true
    },
})

const requestmodels = mongoose.model("request",requsetschema);
module.exports = requestmodels;