const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tecnicaSchema = new Schema({
  nombre:       String,
  descripcion:  String,
  imgs_url:{
    type:       Array
  },
  descontinuada: Boolean
});

module.exports = mongoose.model('Tecnicas',tecnicaSchema);