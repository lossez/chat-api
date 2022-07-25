const router = require('express').Router();
const messageController = require('../controllers/message.controller');

router
    .get('/', messageController.getNotDuplicateName)
    .get('/:name', messageController.index)
    .get('/detail/:id', messageController.show)
    .put('/update/:id', messageController.update)
    .post('/', messageController.create)
    .delete('/all/:name', messageController.deleteByName)
    .delete('/:id', messageController.destroy);


module.exports = router;