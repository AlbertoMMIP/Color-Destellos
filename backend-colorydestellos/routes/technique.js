const express = require('express');
const router = express.Router();
const Technique = require('../models/Technique');


router.post("/create", (req,res) =>{
    let name        = req.body.name,
        description = req.body.description,
        obsolet     = req.body.obsolet,
        imgs_url    = req.body.imgs;
    
    Technique.create({name,description,obsolet,imgs_url})
            .then(() =>{
                res.status(201).json({msg:"Técnica registrada correctamente"});
            })
            .catch(err => {
                res.status(500).json({err, msg:"No se pudo registrar la técnica"});
            })
})

router.get("/find", (req,res) => {
    Technique.find()
        .then(techs => {
            res.status(200).json({techs});
        })
        .catch(err => {
            res.status(500).json({err,msg:"Error al obtener las técnicas"});
        })
});


module.exports = router;
