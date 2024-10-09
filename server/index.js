require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL
const app = express();
const PORT = process.env.PORT;
const usermodels = require("./Models/users");
const bodyparser = require("body-parser");
const contactmodels = require("./Models/contact");
const requestmodels = require("./Models/Request");
const uploadmodel = require("./Models/upload");

app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}))

mongoose.connect(MONGODB_URL).then(()=>{
    console.log("Database connected successfully")
}).catch(()=>{
    console.log("Database connection failed")
})

//Method  to signin new users
app.post("/createusers",async(req,res)=>{
  const cre =   await usermodels.create(req.body);

  res.status(200).json({
    success:true,
    cre
  })
})

//Method to see all users 
app.get("/getusers",async(req,res)=>{
    const view = await usermodels.find();

    res.status(200).json({
        success:true,
        view
    })
})

//Method to delete users by id
app.delete("/deleteusers/:id",async(req,res)=>{
    const id = req.params.id;
    const del = await usermodels.findByIdAndDelete(id);

    res.status(200).json({
        success:true,
        del
    })
})

//Method to login the existing users
app.post("/login",async(req,res)=>{
    const {email,password} = req.body
    await usermodels.findOne({email:email})

    .then((user)=>{
        if(user){
        if(user.password === password){
            res.status(200).json("success")
        }else{
            res.status(200).json("incorrect password")
        }
    }else{
        res.status(200).json("user not existed")
    }
    })
})

//Method to login for the admine
app.post("/admine",async(req,res)=>{

  const{email,password} = req.body

    await usermodels.findOne({email:email})
    .then((user)=>{
       if(user){
        if(user.password === password){
            res.status(200).json("success")
        }else{
            res.status(200).json("Not a valid admine")
        }
       }else{
        res.status(200).json("admine not existed")
       }
    })
})

//Methods to get the contact us info 
app.post("/addcontact",async(req,res)=>{
    const concre = await contactmodels.create(req.body)

    res.status(200).json({
        success:true,
        concre
    })
})

//Method to view conatct us data
app.get("/getcontactdata",async(req,res)=>{
     await contactmodels.find()

     .then(user=>res.json(user))
     .catch(error=>res.json(error))
    })


//Method to post request for the material
app.post("/addrequest",async(req,res)=>{
    const reqcon = await requestmodels.create(req.body)

    res.status(200).json({
        success:true,
        reqcon
    })
})

//Methods to get the request data
app.get("/getrequestdata",async(req,res)=>{
    await requestmodels.find()

    .then(user=>res.json(user))
    .catch(error=>res.json(error))
})

//Methods to post the upload
app.post("/uploadata",async(req,res)=>{
    const wri = await uploadmodel.create(req.body)

    res.status(200).json({
        success:true,
        wri
    })
})

//Method to get the uploaded data
app.get("/getupload",async(req,res)=>{
    await uploadmodel.find()
    .then(users=>res.json(users))
    .catch(error=>res.json(error))
})

//Method to delete the uploaded data
app.delete("/deleteudata/:id",async(req,res)=>{

    const id = req.params.id
    await uploadmodel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(error=>res.json(error))
})


app.listen(PORT,()=>{
    console.log(`The server is working at : http://localhost:${PORT}`)
})