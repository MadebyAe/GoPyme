var express = require('express');
var router = express.Router();
var api = '78k1rpg2op74nh';
var secret = 'z7TukCpZTGk2FhG0';
var callback = 'http://localhost:3000/oauth/linkedin/callback';



var linkedin = Linkedin.init('my_access_token', {
    timeout: 10000 /* 10 seconds */
});

var app = express();


router.get('/', function(req, res, next) {
  res.render('home',{title: 'Linkedin test'});
});


module.exports = router;

/*function Home(req, res, next) {
  res.render('home',{title: 'Linkedin test'});
}
export default Home*/