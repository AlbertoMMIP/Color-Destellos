const express = require("express");
const router = express.Router();
const Appointment = require('../models/Appointment');


router.get("/", (req,res) => {
  Appointment.find()
    .then(appoints => {
      res.status(200).json({appoints});
    })
    .catch(err => {
      res.status(500).json({err,msg:"No existen citas"});
    })
});

router.get("/:idStylist", (req,res) => {
  Appointment.find({stylist:req.params.idStylist})
    .then(appoints => {
      res.status(200).json({appoints});
    })
    .catch(err => {
      res.status(500).json({err,msg:"No tiene citas la estilista"});
    })
});

router.get("/:idStylist:date", (req,res) => {
  Appointment.find({$and:[{stylist:req.params.idStylist},{appoiment:req.params.date}]})
    .then(appoints => {
      res.status(200).json({appoints});
    })
    .catch(err => {
      res.status(500).json({err,msg:"No tiene citas la estilista"});
    })
});

module.exports = router;