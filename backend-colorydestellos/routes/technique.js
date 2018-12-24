const express = require('express');
const router = express.Router();
const Technique = require('../models/Technique');
const upload = require('../helpers/multer');


router.post("/create", upload.single("imgs_url"), (req,res) =>{
    let name        = req.body.name,
        description = req.body.description,
        obsolet     = false,
        imgs_url    = "";
        if(req.file) imgs_url = req.file.url;
        else{
            res.status(500).json({msg:"Se necesita una imagen como referencia"});
        }
    
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
