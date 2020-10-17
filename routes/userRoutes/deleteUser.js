var express = require('express');
const db = require('../../db/users/userQueries')
var router = express.Router();

/* DELETE selected user. */
router.delete('/:user_id', db.deleteUser)

module.exports = router;
