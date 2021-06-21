const express = require('express');
const dotenv=require('dotenv');
const app = express();
const cookieParser = require('cookie-parser');

dotenv.config({path:'./config.env'});//not need to call in all file
require('./DB/connection');//dor mongoose
app.use(express.json());
app.use(cookieParser());
app.use(require('./Router/register'));//link the router file
app.use(require('./Router/signin'));
app.use(require('./Router/profile'));
app.use(require('./Router/getData'));
app.use(require('./Router/editProfile'));
app.use(require('./Router/logout'));
app.use(require('./Router/compiler'));


// add result 
app.use(require('./Router/result'));



const PORT=process.env.PORT || 4000;





app.get('/',(req,res)=>{
  res.send('hello from app home');
});


app.listen(PORT,()=>
{
  console.log(`server is created as port number ${PORT}`)
})