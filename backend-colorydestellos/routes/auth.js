const express = require("express");
const router = express.Router();
const User = require('../models/User');
const Stylist = require('../models/Stylist');


router.get("/login", (req,res) => {
  User.findOne({email:req.body.email})
    .then(user => {
      res.status(200).json({user});
    })
    .catch(err => {
      res.status(500).json({err,msg:"No se encontró el usuario"});
    })
});

module.exports = router;