const express = require("express");
const router = express.Router();
const User = require('../models/User');
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

router.post("/register", async(req,res) => {
  if(req.body.password !== req.body.confirmPass) return res.status(500).json({msg:"Las contraseñas no coinciden"});

  const salt = bcrypt.genSaltSync(256);
  const hashedPassword = bcrypt.hashSync(req.body.password,salt);
  let name = req.body.name, 
        email = req.body.email, 
        password = hashedPassword,
        phone = req.body.phone,
        rol = req.body.rol;
  
  if(name === '' || phone === '' ) return res.status(500).json({msg:"Son necesarios todos los datos"});
  if(phone.length < 8) return res.status(500).json({msg:"El formato del celular es incorrecto"});
  phone = phone.substr(phone.length-8,8)
  const user = await User.findOne({phone});
  if(!user) {
    User.create({name,email,password,phone,rol})
      .then(user => {
        res.status(201).json({user,msg:"Usuario registrado exitosamente"});
      })
      .catch(err => {
        res.status(500).json({msg:"El usuario no se pudo registrar"});
      })
  }else return res.status(201).json({user, msg:"Usuario ya existente"});
  
});

module.exports = router;