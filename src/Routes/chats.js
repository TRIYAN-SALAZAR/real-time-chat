const { Router } = require('express');
const router = Router();

const { getChats, connectChat, createChatOrRoom } = require('../Controller/chats');
const isAuthenticated = require('../middlewares/express/authenticate');

router.route('/')
    .get(isAuthenticated, getChats)

router.route('/:id')
    .post(isAuthenticated, createChatOrRoom)

module.exports = router;