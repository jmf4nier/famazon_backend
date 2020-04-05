var express = require('express');
const db = require('../db/queries')
var router = express.Router();

/* DELETE selected user. */
router.delete('/:id', db.deleteUser)

module.exports = router;
