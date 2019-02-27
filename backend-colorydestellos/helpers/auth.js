const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.verifyToken = (req,res) =>{
    const token = req.headears['x-acces-token'];
    if(!token) return res.status(403).json({msg:"Se requiere autenticarse antes de realizar esta acción"});
    jwt.verify(token,process.env.SECRET,async(err,decoded) => {
        if(err) return res.status(403).json({err,msg:"El tiempo para realizar la acción vencio"});
        req.user = await User.findById(decoded.id);
        next();
    })
};