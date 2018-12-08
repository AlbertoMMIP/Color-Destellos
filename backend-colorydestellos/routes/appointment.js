const express = require("express");
const router = express.Router();
const Appointment = require('../models/Appointment');


router.get("/:idStylist", (req,res) => {
  Appointment.find({stylist:req.params.idStyle})
    .then(appoints => {
      res.status(200).json({appoints});
    })
    .catch(err => {
      res.status(500).json({err,msg:"No tiene citas la estilista"});
    })
});

module.exports = router;