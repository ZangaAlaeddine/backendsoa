const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({

});

const evenementSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  lieu: {
    type: String,
    required: true,
  },
  hote: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
   
  },
  participants: {
    type: [participantSchema],
  },
 
  event_date: {
    type: Date,
    required: true,
  },
  archived: {
    type: Boolean,
    default: false,
  },
});

const Evenement = mongoose.model("Evenement", evenementSchema);

module.exports = Evenement;
