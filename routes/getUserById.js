var express = require('express');
const db = require('../db/queries')
var router = express.Router();

/* GET select user listing. */
router.get('/:id', db.getUserById)

module.exports = router;
