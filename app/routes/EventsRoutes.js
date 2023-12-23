const express = require ('express'); 
const router = express.Router(); 

const EventsController = require('../controllers/EventsController'); 
module.exports = () => {
    // console.log('po',po);
    // Get /events
    // podajemy ze funkcja znajduje sie w controller pod polem index:
    router.get('/', EventsController.index )

    // POST /events/add 
    router.post('/add', EventsController.create )
    // POST /events/delete/:id 
    router.delete('/delete/:id', EventsController.delete )

    // w naszej funkcji musimy zwrocic router ktory ma juz ustawiony
  return router
};

