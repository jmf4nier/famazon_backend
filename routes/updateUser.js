var express = require('express');
const db = require('../db/queries')
var router = express.Router();

/* PATCH selected user listing. */
router.patch('/', db.updateUser)

module.exports = router;
