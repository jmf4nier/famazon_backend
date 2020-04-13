var express = require('express');
const db = require('../../db/users/userQueries')
var router = express.Router();

/* POST new user. */
router.post('/', db.createUser)

module.exports = router;
