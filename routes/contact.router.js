const router = require('express').Router();
const contactController = require('../controllers/contact.controller');

router
    .get('/', contactController.index)
    .get('/:id', contactController.show)
    .post('/', contactController.create)
    .put('/:id', contactController.update)
    .delete('/:id', contactController.delete);

module.exports = router;