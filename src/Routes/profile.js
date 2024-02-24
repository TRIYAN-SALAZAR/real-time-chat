const { Router } = require('express');
const router = Router();

const { getProfile } = require('../Controller/profile');
const isAuthenticated = require('../middlewares/express/authenticate');

router.get('/', isAuthenticated, getProfile);

module.exports = router;