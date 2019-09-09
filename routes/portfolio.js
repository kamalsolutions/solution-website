const express = require('express');
const path = require('path');
const router =  express.Router();


router.get('/portfolio',(req,res)=>{
  res.render('portfolio');
});

module.exports = router;