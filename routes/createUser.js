var express = require('express');
const db = require('../db/queries')
var router = express.Router();

/* POST new user. */
router.post('/', db.createUser)

module.exports = router;
