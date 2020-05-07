const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const path=require('path');
const app=express();
const PORT=process.env.PORT || 8085;
const routes=require('./routes/api');
mongoose.connect('mongodb://localhost:27017/OnlineBookStore',{
    useNewUrlParser:true ,
    useUnifiedTopology:true
});
mongoose.connect('connected',() => {
    console.log('mongoose is connected !!!');
})

 //save
 
//const newBook =new books(data);
/*newBook.save((error) =>{
 if(error){
     console.log('oops,something happened');
 }
 else{
     console.log('Data has been inserted');
 }
});*/
//routes
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan('tiny'));
app.use('/api',routes);

app.listen(PORT,console.log(`Server is starting at ${PORT}`));