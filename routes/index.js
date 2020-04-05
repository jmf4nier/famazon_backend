var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('made it to index')
  res.json({info:'some database info'})
  
});

module.exports = router;
