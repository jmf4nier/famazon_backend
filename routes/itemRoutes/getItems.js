var express = require('express');
const db = require('../../db/items/itemQueries')
var router = express.Router();

/* GET users listing. */
router.get('/', db.getItems)

module.exports = router;
