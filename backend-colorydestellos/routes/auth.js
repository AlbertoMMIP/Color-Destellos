const express = require("express");
const router = express.Router();
const User = require('../models/User');
const Stylist = require('../models/Stylist');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post("/login", async(req,res) => {
  const user = await User.findOne({email:req.body.email});
  if(!user) return res.status(500).json({msg:"Email no registrado"});

  let validPass = bcrypt.compareSync(req.body.password,user.password);

  if (!validPass) return res.status(500).json({msg:"Contraseña invalida"});

  const token = jwt.sign(
    {id: user._id},
    process.env.SECRET,
    {
      expiresIn:8600
    }
  );

  delete user._doc.password;
  res.status(200).json({user,token});

});

router.post("/register",(req,res) => {
  if(req.body.password !== req.body.confirmPass) return res.status(500).json({msg:"Las contraseñas no coinciden"});

  const salt = bcrypt.genSaltSync(256);
  const hashedPassword = bcrypt.hashSync(req.body.password,salt);
  const name = req.body.name, 
        email = req.body.email, 
        password = hashedPassword,
        phone = req.body.phone,
        rol = req.body.rol;
  User.create({name,email,password,phone,rol})
      .then(() => {
        res.status(201).json({msg:"Usuario registrado exitosamente"});
      })
      .catch(err => {
        res.status(500).json({msg:"El usuario no se pudo registrar"});
      })

  
});

module.exports = router;