var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places=[
    {name: 'Home', rating:10},
    {name: 'Golden Corral', rating:9},
    {name: 'Apple Bees', rating:8},
    {name: 'Hardees', rating:7},
  ];

  var myname = "Mattias";

  res.render('index', {
    title: 'Favorite Places',
    places: places,
    myname: myname
  });
});

module.exports = router;
