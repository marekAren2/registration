const express = require('express'); 
const router = express.Router();

const EventModel = require('../models/EventModel'); 



module.exports = {
   index: (req, res, next) => {

        EventModel.find({})
        .then((event) => {
            // jeśli sukces
            res.send(event);
        })
        .catch((err) => {
            /// obsługa błędów za pomocą funkcji anonimowej (err to parameter funkcji)
            console.warn(err);
            // res.send(err);
            // res.status(500).json({ error: 'Nieprawidłowe dane JSON w body' });
            res.status(500).send({ 
                message: 'Error while fetching Event (Błąd podczas pobierania wydarzenia)',
                error: err });
        });
    },

    // jak korzystam z tego modelu i po co?
    create: (req, res, next) => {
       const event = new EventModel({
            name: req.body.name,
            event: req.body.event,
            city: req.body.city
       }); 
       event.save()
       .then( (event) => {
        res.status(201).json(event);
       })
        .catch((err) => {
            res.status(500).json({
                message: 'Error while creating Event (Błąd podczas tworzenia wydarzenia)',
                error: err
            })
        })
            
       // ta obsluge tez dopytaj i ogarnij?
        /* event.save((err,event) => {
          if (err) {
                return res.status(500).json({
                    message: 'Error while creating Event',
                    error: err
                })
            }
            return res.status(201).json(event);
        }); */
       
    },
/*     create: (req, res, next) => {
        const event = req.body;
        res.end(JSON.stringify(event));
    }, */
    
    delete: (req,res, next) => {
      try 
        {
            // const parseBody = JSON.parse(req.body)
            // const id = req.param.id;
            const id = req.params.id;
            console.log("🚀 ~ file: EventsController.js:67 ~ id:", id)
            // nie ma find...Remove

            EventModel.findByIdAndDelete(id)
            .then((event) => {
                console.log("🚀 ~ file: EventsController.js:71 ~ EventModel.findByIdAndDelete ~ event:", event)
                // jeśli sukces
                res.status(222).json(id);
            })
            .catch((err) => {
                /// obsługa błędów za pomocą funkcji anonimowej (err to parameter funkcji)
                console.warn(err);
                // res.send(err);
                res.status(555).send({ error: 'Nieprawidłowe dane JSON w body' });
            });

            // const parseBody = req.body;
            const parseBody = id;
            console.log("🚀 ~ file: EventsController.js:71 ~ parseBody:", parseBody);
            // res.send(parseBody).json({"error": "Error catch"});
            // x res.status(777).json({"error": "Error catch"});
        }
      catch (err) 
        {
            // res.send('blad:',req.params)
            // res.send(`'blad :' ${req.params}`)
            
            // res.send(req.params)
            console.warn(err);
            // res.send(err);
            // res.status(666).send({ error: 'Nieprawidłowe dane JSON w body' });
        };
    },
    
};
