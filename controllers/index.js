const express = require('express');

const router = express.Router();

// add HTML routes to current router
router.use(require('./login'));

module.exports = router;