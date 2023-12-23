const config = require('./config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const mongoUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose
.connect(mongoUrl, {})
.then(() => {
    console.log('MongoDB is connected! połączono :)');
   
})
.catch((err) => {
    throw err
    console.warn(err);
    // res.send(err);
});


const app = express();
// kolejne middleware 1.7 05:20  wbudowane w express.json()
// kolejnosc ma znaczenie przenioslem do gory
app.use(express.json())
app.use(cors());

// uruchamiamy bo jest to funkcja skad to uruchomienie? 
const eventsRoutes = require('./app/routes/EventsRoutes')(); 
// console.log("🚀 ~ file: index.js:9 ~ eventsRoutes:", eventsRoutes)


// tu definiowana sciezka glowna ,na niej będą wszystkie trasy routes z eventRoutes
app.use('/events', eventsRoutes);

app.listen(config.app.port, () => {
    console.log('serwer start');
})