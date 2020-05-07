const mongoose=require('mongoose');
const Schema=mongoose.Schema
const AuthorSchema=new Schema({
    
    AuthorName:{
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
    Address:{
        type:String,
        required:true
    }

})
//model
 const authors=mongoose.model('authors',AuthorSchema);
 module.exports=authors;