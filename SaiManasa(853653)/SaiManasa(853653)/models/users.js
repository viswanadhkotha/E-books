const mongoose=require('mongoose');
const Schema=mongoose.Schema
const UserSchema=new Schema({
    
    UserName:{
        type:String,
        required:true
    },
    ContactNo:{
        type:String,
        required:true
    },
    EmailID:{
        type:String,
        required:true
    },
    NoOfOrders:{
        type:String,
        required:true
    }

})
//model
 const users=mongoose.model('Users',UserSchema);
 module.exports=users;