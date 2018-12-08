const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  client:{
    type: Schema.Types.ObjectId,
    ref:  "User"
  },
  stylist:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  technique:{
    type: Schema.Types.ObjectId,
    ref:"Technique"
  },
  status:{
    type: String,
    enum: ["Active","Cancel","Done"],
    default: "Active"
  },
  place:{
    type:{
      type:     String,
      default:  "Point"
    },
    coordinates: [Number]
  },
  appointment:  Date,
  hour:         Number,
  price:        Number,
  tickect:      Number,
  changes:      [Date]
},{
  timestamps:{
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

appointmentSchema.index({place:"2dsphere"});

module.exports = mongoose.model("Appointment",appointmentSchema);