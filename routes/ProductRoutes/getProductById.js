var express = require('express');
const db = require('../../db/products/productQueries')
var router = express.Router();

/* GET select user listing. */
router.get('/:id', db.getProductById)

module.exports = router;
