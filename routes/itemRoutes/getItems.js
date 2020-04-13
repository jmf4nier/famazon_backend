var express = require('express');
const db = require('../../db/users/userQueries')
var router = express.Router();

/* POST new user. */
router.get('/', db.getItems)

module.exports = router;
