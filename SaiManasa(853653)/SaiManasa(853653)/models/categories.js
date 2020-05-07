const mongoose=require('mongoose');
const Schema=mongoose.Schema
const CategorySchema=new Schema({
    Category:{
        type:String,
        required:true
    }
})
//model
 const categories=mongoose.model('categories',CategorySchema);
 module.exports=categories;