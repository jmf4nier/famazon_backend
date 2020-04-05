var express = require('express');
const db = require('../db/queries')
var router = express.Router();

/* GET users listing. */
router.get('/', db.getUsers)

module.exports = router;
