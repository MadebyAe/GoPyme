var express = require('express');
var router = express.Router();

router.get('/profile', function(req, res, next) {
  res.render('profile',{title: 'Linkedin test'});



});




module.exports = router;
/*function Profile(req, res, next) {
  res.render('profile',{title: 'Linkedin test'});
}
export default Profile*/