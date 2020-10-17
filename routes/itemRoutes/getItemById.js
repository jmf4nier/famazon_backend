var express = require('express');
const db = require('../../db/items/itemQueries')
var router = express.Router();

/* GET select user listing. */
router.get('/:id', db.getItemById)

module.exports = router;
