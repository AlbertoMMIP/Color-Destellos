const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stylistSchema = new Schema({
  profile_url:    String,
  id_url:         String,
  homeService:    Boolean,
  experience:     Number,
  businessDays:   [String],
  imgsBook_url:   [String],
  locationEstablishment:{
    type:{
      type:     String, 
      default:  "Point"
    },
    coordinates:  [Number]
  },
  techniques: [{
    technique:{
      type: Schema.Types.ObjectId,
      ref: "Techinque"
    },
    price:    Number
  }],
  businessHours:{
    start:    String,
    end:      String
  },
  status: {
    type: String,
    enum: ["Accept","Denied","Process"],
    default:  "Process"
  }
  
});

stylistSchema.index({locationEstablishment:"2dsphere"});

module.exports = mongoose.model("Stylist",stylistSchema);