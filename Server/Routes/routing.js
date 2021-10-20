// for jwt we require 3 things header payload and sign to configure jwt steps are
// step 1-instal jsonwebtoken , step 2-import jwt , step 3-create payload
const express=require('express')
const jwt=require('jsonwebtoken')
const router=express.Router()
const mongoose=require('mongoose')
const model=require('../Models/Model')

function verifyToken(req,res,next){
if(!req.headers.authorization){
    console.log("A")
    return res.status(401).send("unauthorized user")
}
let token= req.headers.authorization.split(' ')[1]
if(token==='null'){
    console.log("B")
    return res.status(401).send("unauthorized user")
}
let payload=jwt.verify(token,'secretkey')
if(!payload){
    console.log("c")
    return res.status(401).send("unauthorized user")
}
req.userId=payload.subject
next()
}


router.post('/login',function(req,res){
        
        model.find({"email":req.body.email},(error,user)=>{
            console.log(user)
            if(error){
                res.send(error)
            }else if(req.body.password==user[0].password){
                 //creating a payload, subject is the key and registeruserid is value in payload
             let payload={subject:user._id}
             //we now need to declare token which contains payload and secretkey(secret key can be anything) as its parameter.
             let token=jwt.sign(payload,'secretkey')
                res.send({token})
            }else{

                res.send("Password missmatch!")
            }
        })
        
    })

router.post('/register',(req,res)=>{
    
    let userData=req.body
    let user=new model(userData)
    
    user.save((errors,registeredUser)=>{
         if(errors){
             console.log(errors)
         }else{
             //creating a payload, subject is the key and registeruserid is value in payload
             let payload={subject:registeredUser._id}
             //we now need to declare token which contains payload and secretkey(secret key can be anything) as its parameter.
             let token=jwt.sign(payload,'secretkey')
             res.status(200).send({token})
         }
     })
})

router.get('/events',(req,res)=>{
    let events=[
        {
            "_id":1,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        },
        {
            "_id":2,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        },
        {
            "_id":3,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        },
        {
            "_id":4,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        },
        {
            "_id":5,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        },
        {
            "_id":6,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        },
        {
            "_id":7,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        }, {
            "_id":8,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        },
        {
            "_id":9,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        }
    ]
    res.json(events)
})

router.get('/special',verifyToken,(req,res)=>{
    let events=[
        {
            "_id":1,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        },
        {
            "_id":2,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        },
        {
            "_id":3,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        },
        {
            "_id":4,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        },
        {
            "_id":5,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        },
        {
            "_id":6,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        },
        {
            "_id":7,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        }, {
            "_id":8,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        },
        {
            "_id":9,
            "name":"Auto Expo",
            "description":"laurem ipsum",
            "date":"20th June, 2021"
        }
    ]
    res.json(events)
})

module.exports=router