const express=require('express');
const router=express.Router();
const books=require('../models/books');
const authors=require('../models/authors');
const categories=require('../models/categories');
const ratings=require('../models/rating');
const users=require('../models/users');

router.get('/books',(req,res) =>{
   
    books.find({ })
     .then((data) => {
        console.log('Data:',data);
        res.json(data);
     })
     .catch((error)=>{
         console.log('error:',error);
         
     })
 });
 router.get('/authors',(req,res) =>{
   
    authors.find({ })
     .then((data) => {
        console.log('Data:',data);
        res.json(data);
     })
     .catch((error)=>{
         console.log('error:',error);
         
     })
 });
 router.post('/books/save',(req,res) =>{
    console.log('Body:',req.body);
    //saving data to mongodb
    const data  =req.body;
    console.log('Data:',data);
    const newBook=new books(data);
    newBook.save((error) =>{
          if(error){
              res.status(500).json({msg:'Sorry, internal server errors'});
              return;
          }
          return res.json({
                msg:"we received your data ..."
        })
    })
});
router.post('/authors/save',(req,res) =>{
    console.log('Body:',req.body);
    //saving data to mongodb
    const data  =req.body;
    console.log('Data:',data);
    const newAuthor=new authors(data);
    newAuthor.save((error) =>{
          if(error){
              res.status(500).json({msg:'Sorry, internal server errors'});
              return;
          }
          return res.json({
                msg:"we received your data ..."
        })
    })
});
router.get('/categories',(req,res) =>{
   
    categories.find({ })
     .then((data) => {
        console.log('Data:',data);
        res.json(data);
     })
     .catch((error)=>{
         console.log('error:',error);
         
     })
 });
 router.post('/categories/save',(req,res) =>{
    console.log('Body:',req.body);
    //saving data to mongodb
    const data  =req.body;
    console.log('Data:',data);
    const newCategory=new categories(data);
    newCategory.save((error) =>{
          if(error){
              res.status(500).json({msg:'Sorry, internal server errors'});
              return;
          }
          return res.json({
                msg:"we received your data ..."
        })
    })
});
router.post('/authors/delete',(req,res) =>{
    console.log('Body:',req.body);
    const id=req.body;
    //deleting data from mongodb
    db = mdb.db("OnlineBookStore");
    db.collection("users").remove({_id:id});
    return res.json({
        msg:"we deleted your data ..."
})
});
router.post('/categories/delete',(req,res) =>{
    console.log('Body:',req.body);
    const id=req.body;
    //deleting data from mongodb
    db = mdb.db("OnlineBookStore");
    db.collection("categories").remove({_id:id});
    return res.json({
        msg:"we deleted your data ..."
})
});
router.post('/books/delete',(req,res) =>{
    console.log('Body:',req.body);
    const id=req.body;
    //deleting data from mongodb
    db = mdb.db("OnlineBookStore");
    db.collection("books").remove({_id:id});
    return res.json({
        msg:"we deleted your data ..."
})
});


router.get('/ratings',(req,res) =>{
   
    ratings.find({ })
     .then((data) => {
        console.log('Data:',data);
        res.json(data);
     })
     .catch((error)=>{
         console.log('error:',error);
         
     })
 });
 router.get('/users',(req,res) =>{
   
    users.find({ })
     .then((data) => {
        console.log('Data:',data);
        res.json(data);
     })
     .catch((error)=>{
         console.log('error:',error);
         
     })
 });



module.exports=router;