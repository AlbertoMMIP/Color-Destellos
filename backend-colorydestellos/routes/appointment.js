const express = require("express");
const router = express.Router();
const Appointment = require('../models/Appointment');

router.post("/create", (req,res) =>{
  let {client,
      stylist,
      technique,
      coordinates,
      appointment,
      hour,
      price} = req.body;
  let tickect = Math.floor(Math.random() * 9999);
  let appointmentDone = {client,
    stylist,
    technique,
    place:{
      coordinates
    },
    appointment,
    hour,
    price,
    tickect} 
  
  Appointment.create(appointmentDone)
          .then(appoi =>{
              res.status(201).json({appoi});
          })
          .catch(err => {
              console.log(err);
              res.status(500).json({err, msg:"No se pudo registrar la técnica"});
          })
});

router.get("/", (req,res) => {
  Appointment.find()
    .populate("client technique", "name")
    .then(appoints => {
      res.status(200).json({appoints});
    })
    .catch(err => {
      res.status(500).json({err,msg:"No existen citas"});
    })
});

router.get("/:idStylist", (req,res) => {
  Appointment.find({stylist:req.params.idStylist})
    .populate("client technique", "name phone")
    .then(appoints => {
      res.status(200).json({appoints});
    })
    .catch(err => {
      res.status(500).json({err,msg:"No tiene citas la estilista"});
    })
});

router.get("/:ticket", (req,res) => {
  Appointment.find({tickect:req.params.ticket})
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