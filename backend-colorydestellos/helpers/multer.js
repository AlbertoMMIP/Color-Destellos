const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key:    process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "ColorDestellos/Tecnicas",
  allowedFormats: ["png","jpg","gif"]
});

const storagePort = cloudinaryStorage({
  cloudinary,
  folder: "ColorDestellos/Portafolio",
  allowedFormats: ["png","jpg","gif"]
});

module.exports = multer({storage,storagePort});