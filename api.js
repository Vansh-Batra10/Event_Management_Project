
// create an schema

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const cardSchema = new mongoose.Schema({
  title: String,
  imageSrc: String,
  price: String,
});
Anniversary_Venue=mongoose.model('anniversary_venue',cardSchema);

 
// Connecting to database
const query = 'mongodb+srv://batravansh162:2r0AEX0oxgQ2JMpz@cluster0.hnplbfa.mongodb.net/?retryWrites=true&w=majority'
 
const db = (query);
mongoose.Promise = global.Promise;
 
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
router.post('/findall', async function (req, res) {
  try {
    const data = await Anniversary_Venue.find().exec();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});
module.exports = router;