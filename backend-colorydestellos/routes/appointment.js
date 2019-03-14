const express = require("express");
const router = express.Router();
const Appointment = require('../models/Appointment');
const sms = require('../helpers/send_sms');

router.post("/create", (req,res) =>{
  let {client,
      stylist,
      technique,
      coordinates,
      appointment,
      hour,
      price,
      phoneTo,
      serviceAt} = req.body;
  if(client === '' || stylist === '' || technique === '' || appointment === '' || hour === '' || phoneTo === '' || serviceAt === '') return res.status(500).json({msg:"Todos los datos son necesarios"});

  appointment = new Date(appointment);
  let appointmentDone = {client,
    stylist,
    technique,
    place:{
      coordinates
    },
    appointment,
    hour,
    price,
    tickect:0,
    serviceAt};

  phoneTo = '+5255'.concat(phoneTo.substr(phoneTo.length-8,8));
  
  Appointment.find().sort({tickect : -1}).limit(1)
            .then(appoints => {
              appointmentDone.tickect = appoints[0].tickect+1;
              Appointment.create(appointmentDone)
              .then(appoi =>{
                const options = {
                  user: 'CLIENT',
                  to : phoneTo,
                  ticket:appoi.tickect
                }
                //sms.sendSms(options);
                res.status(201).json({appoi});
              })
              .catch(err => {
                  res.status(500).json({err, msg:"No se pudo registrar la técnica"});
              })
            } )

  
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

router.get("/getInfoCita/:ticket", (req,res) => {
  Appointment.findOne({tickect:req.params.ticket})
    .populate("client technique stylist","name")
    .then(appoints => {
      if (!appoints) res.status(500).json({err,msg:"Ticket no registrado en la base."});
      res.status(200).json({appoints});
    })
    .catch(err => {
      res.status(500).json({err,msg:"Ticket no registrado en la base."});
    })
});

router.get("/:idStylist/:date", (req,res) => {
  let startDay = new Date(req.params.date);
  let endDay = new Date(req.params.date);
  endDay.setDate(endDay.getDate() + 1);
  Appointment.find({$and:[{stylist:req.params.idStylist},{appointment:{$gte:startDay}},{appointment:{$lt:endDay}}]},{hour:1})
    .then(appoints => {
      res.status(200).json({appoints});
    })
    .catch(err => {
      res.status(500).json({err,msg:"No tiene citas la estilista"});
    })
});

module.exports = router;