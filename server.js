const db = require("./db/db")
const express = require('express')
const cors = require('cors')

const app = express()
const port = 4000


app.use(cors())
app.use(express.json())

// ajouter evenement
app.post('/events', async (req, res) => {
  try {
    const newEvent = new Event(req.body);

    // verifier date d'evenment
    if (newEvent.date < new Date()) {
      newEvent.archive = true;
    }

    await newEvent.save();
    res.status(200).json({ Success: "Event successfully added", addEvent: newEvent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ InternalServerError: 'Unable to create a new event' });
  }
});

// modifier evenement
app.put('/events/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedEvent) {
      return res.status(404).json({ NotFound: 'Event not found' });
    }

    // Vérifier date
    if (updatedEvent.date < new Date()) {
      updatedEvent.archive = true;
      await updatedEvent.save();
    }

    res.status(200).json({ Success: 'Event updated successfully', updatedEvent });
  } catch (err) {
    console.log(err);
    res.status(500).json({ InternalServerError: 'Unable to update the event' });
  }
});

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})



db.connectToDb();
