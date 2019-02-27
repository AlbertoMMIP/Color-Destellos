const express = require('express');
const router = express.Router();
const Stylist = require('../models/Stylist');
const User = require('../models/User');

router.post("/create", (req,res) => {
  let {homeService,
      experience,
      businessDays,
      id_url,
      coordinates,
      techniques,
      businessHours} = req.body;

  let stylist = {
    homeService,
    experience,
    businessDays,
    id_url,
    locationEstablishment:{
      coordinates
    },
    techniques,
    businessHours
  };

  Stylist.create(stylist)
    .then(() => {
      res.status(200).json({msg:"Estilista creada con éxito"});
    })
    .catch(err => {
      res.status(500).json({err,msg:"No se logró crear el registro"});
    })

});

router.patch("/converToStylist", (req,res) => {
  let idUser = req.body.id;
  let idStylist = req.body.idStylist;
  let user = {
    estilistaID :idStylist
  }

  User.findByIdAndUpdate(idUser,{$set:user},{new:true})
      .then(user => {
        res.status(201).json({user,msg:"Correcto"});
      })
      .catch(err => {
        res.status(500).json({err,msg:"Error al convertir al usuario"});
      })

});


router.get("/getAll", (req,res) => {
  User.find({estilistaID:{$exists:true}},{rol:0,password:0,created_at:0,updated_at:0,__v:0})
      .populate('estilistaID','profile_url')
      .then(stylists => {
        res.status(200).json({stylists});
      })
      .catch(err => {
        res.status(500).json({err,msg:"Error al consultar estilistas"});
      })
});

router.get("/getInfo/:id", (req,res) => {
  let idStylist = req.params.id;

  Stylist.findById(idStylist)
          .populate("technique")
          .then(info => {
            res.status(200).json({info});
          })
          .catch(err => {
            res.status(500).json({err,msg:"No se pudo obtener el detalle"});
          })
});

module.exports = router;