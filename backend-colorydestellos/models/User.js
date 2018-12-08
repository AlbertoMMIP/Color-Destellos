const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  rol:{
    type:     String,
    enum:     ["ADMIN", "ESTILISTA", "CLIENTE"],
    default:  "CLIENTE"
  },
  name:       String,
  email:      String,
  password:   String,
  phone:      Number,
  estilistaID:{
      type:   Schema.Types.ObjectId,
      ref:    "Stylist"
  }
},{
  timestamps:{
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model('User',userSchema);