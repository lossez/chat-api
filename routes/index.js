const router = require('express').Router();

const chat = require('./chat.router');
const message = require('./message.router');
const contact = require('./contact.router');

router
    .use('/api/chat', chat)
    .use('/api/message', message)
    .use('/api/contact', contact);

module.exports = router;