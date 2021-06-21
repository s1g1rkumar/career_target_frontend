const express=require('express');
const router=express.Router();
require('../DB/connection');
const User=require('../Models/User');


router.post('/result',async(req,res)=>
{
    const { result, email,_id} = req.body;
    if(!result){
        return res.status(423).json({error:"our score is ZERO"})
    }
    try{
        var score = {result};
        const userExist = await User.findOne({email:email});
        if(userExist){
           const scoreupdate = await User.findByIdAndUpdate(_id,score,{new:true});
           console,log(scoreupdate);
           if(scoreupdate !== ''){
               res.status(200).json({message:'score update successfully'})
           }
           else{
               res.status(500).json({error:'failed to update score'})
           }
        }
    }
    catch(err){
        console.log(err);
      }
  });

module.exports=router;