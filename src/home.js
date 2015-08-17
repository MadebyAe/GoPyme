function Home(req, res, next) {
  let lin = require('node-linkedin')('78y5b1urgxpswh', 'GcgckmPUs548YKJg', 'http://localhost:3001', 'R2NnY2ttUFVzNTQ4WUtKZw');
  lin.init('78y5b1urgxpswh');
  if(req.query.code){
  	lin.auth.getAccessToken(res, req.query.code, 'R2NnY2ttUFVzNTQ4WUtKZw', function(err, results) {
  		if ( err ) return console.error(err);
        console.log(results);
        return res.redirect('/profile');
    });
  }
  res.render('home',{title: 'Linkedin test'});
}
export default Home