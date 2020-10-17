var express = require('express');
const db = require('../../db/users/userQueries')
var router = express.Router();

/* GET select user listing. */
router.get('/:user_id', db.getUserById)

module.exports = router;
