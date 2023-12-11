const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const eventController = require('./eventController');
const Evenement = require('./models/evenement');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get('/events', (req, res) => {
  eventController.getAllEvents((error, events) => {
    if (error) {
      res.status(500).json({ error: 'Erreur lors de la récupération des événements.' });
    } else {
      res.json(events);
    }
  });
});


app.post('/events', async (req, res) => {
  try {
    const newEvent = new Evenement(req.body);
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de l\'événement.' });
  }
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
