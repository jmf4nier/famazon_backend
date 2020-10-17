var express = require('express');
const db = require('../../db/users/userQueries')
var router = express.Router();

/* PATCH selected user listing. */
router.patch('/:user_id', db.updateUser)

module.exports = router;
