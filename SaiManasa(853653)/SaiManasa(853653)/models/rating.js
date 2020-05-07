const mongoose=require('mongoose');
const Schema=mongoose.Schema
const RatingSchema=new Schema({
    BookTitle:{
        type:String,
        required:true
    },
    Review:{
        type:String,
        required:true
    },
    Rating:{
      type:String,
      required:true
    }
})
//model
 const ratings=mongoose.model('ReviewAndRatings',RatingSchema);
 module.exports=ratings;