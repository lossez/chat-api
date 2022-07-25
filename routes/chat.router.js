const route = require('express').Router();

const chatController = require('../controllers/chat.controller');

route
    .get('/', chatController.index)
    .get('/:id', chatController.show)
    .post('/', chatController.create)
    .put('/:name', chatController.update)
    .delete('/:id', chatController.destroy);




module.exports = route;