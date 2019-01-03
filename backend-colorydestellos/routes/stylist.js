const express = require('express');
const router = express.Router();
const Stylist = require('../models/Stylist');

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


module.exports = router;