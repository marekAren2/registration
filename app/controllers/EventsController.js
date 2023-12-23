const express = require('express'); 
const router = express.Router();

const EventModel = require('../models/EventModel'); 



module.exports = {
   index: (req, res, next) => {
        // console.log('req,res,next',req,res,next);
       res.json({
            events: [
                {
                    name: "Krystian Dziopa",
                    event: {key: 'front-end', val: 'front end'},
                    city: {key: 'warsaw', val: 'warszawa'}
                },
                {
                    name: "Łukasz Badocha",
                    event: {key: 'back-end', val: 'back end'},
                    city: {key: 'cracow', val: 'Krakow'}
                },
            ]
        });
    },

    // jak korzystam z tego modelu i po co?
    create: (req, res, next) => {
       const event = new EventModel({
            name: req.body.name,
            event: req.body.event,
            city: req.body.city
       }); 
       // ta obsluge tez dopytaj i ogarnij?
        event.save((err,event) => {
          if (err) {
                return res.status(500).json({
                    message: 'Error while creating Event',
                    error: err
                })
            }
            return res.status(201).json(event);
        });
       
    },
/*     create: (req, res, next) => {
        const event = req.body;
        res.end(JSON.stringify(event));
    }, */
    
    delete: (req,res, next) => {
        res.send('delete')
    },
    
};
