var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsCtrl.newTicket);
router.post('/flights/:id/tickets/new', ticketsCtrl.addTicket);

module.exports = router;

