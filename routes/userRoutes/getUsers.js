var express = require('express');
const db = require('../../db/users/userQueries')
var router = express.Router();

/* GET users listing. */
router.get('/', db.getUsers)

module.exports = router;
