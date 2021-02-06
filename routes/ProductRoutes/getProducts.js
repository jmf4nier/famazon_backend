var express = require('express');
const db = require('../../db/products/productQueries')
var router = express.Router();

/* GET users listing. */
router.get('/', db.getProducts)

module.exports = router;
