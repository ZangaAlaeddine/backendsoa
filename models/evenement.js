const mongoose = require("mongoose")

const evenement = new mongoose.Schema({
    nom: [{
        String
    }],
    date: [{
        Date
    }],
    lieu: [{
        String
    }],
    hote: [{
        String
    }],
    description: [{
        String
    }],
    image: [{
        
    }],
    participants: [{
        participantSchema
    }],
})