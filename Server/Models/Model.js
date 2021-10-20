const mongoose=require('mongoose')
const db="mongodb+srv://user97:user97@practice.cn1v6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const schema= mongoose.Schema

const userSchema= new mongoose.Schema({
    email:String,
    password:String
})


mongoose.connect(db,err=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connected to MongoDB!")
    }
})

module.exports = mongoose.model('user', userSchema, 'users')