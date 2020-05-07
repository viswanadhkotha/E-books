const mongoose=require('mongoose');
const Schema=mongoose.Schema
const BookSchema=new Schema({
    BookTitle:{
        type:String,
        required:true
    },
    AuthorName:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    }
    /*ReleaseDate:{
        type:Date,
        required:true
    }*/

})
//model
 const books=mongoose.model('books',BookSchema);
 module.exports=books;