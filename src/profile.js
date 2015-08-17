function Profile(req, res, next) {
  let profile;
  let lin = require('node-linkedin')('78y5b1urgxpswh', 'GcgckmPUs548YKJg', 'http://localhost:3001', 'R2NnY2ttUFVzNTQ4WUtKZw');
  lin.init('78y5b1urgxpswh');
  if(lin.people){
    lin.people.me(['id', 'first-name', 'last-name', 'picture-url', 'picture-urls::(original)', 'num-connections', 'summary', 'skills', 'positions'],function(err, $in){
      profile = $in;
    });
  }
  console.log(profile);
  res.render('profile',{title: 'Linkedin test', profile: profile, profileImg: profile.pictureUrls.values[0]});
}
export default Profile