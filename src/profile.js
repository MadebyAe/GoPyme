function Profile(req, res, next) {
  let lin = require('node-linkedin')('78y5b1urgxpswh', 'GcgckmPUs548YKJg', null);
  lin.init('78y5b1urgxpswh');
  console.log(lin);
  linkedin.companies_search.name('facebook', 1, function(err, company) {
  	console.log(err, company);
  };
  lin.people.me(function(err, $in){
  	console.log(err, $in);
  });
  res.render('profile',{title: 'Linkedin test'});
}
export default Profile