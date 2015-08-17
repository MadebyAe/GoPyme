function Oauth(req, res, next) {
  let lin = require('node-linkedin')('78y5b1urgxpswh', 'GcgckmPUs548YKJg', 'http://localhost:3001/');
  lin.init('78y5b1urgxpswh');
  lin.auth.authorize(res, ['r_basicprofile', 'r_emailaddress']);
}
export default Oauth