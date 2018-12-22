const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const techniqueSchema = new Schema({
  name:         String,
  description:  String,
  imgs_url:{
    type:       [String]
  },
  obsolet:      Boolean
},{
  timestamps:{
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('Technique',techniqueSchema);