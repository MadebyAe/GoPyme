/*import express    from 'express'
import handlebars from 'node_modules/node-handlebars'
import home       from './src/home'
import profile    from './src/profile'

// Set
let hbs = handlebars.create({ extension: 'html' });
let app = express();
// Config
app.set("view engine", "html");
app.engine("html", handlebars());
app.use('/assets', express.static(__dirname + '/assets', { maxAge:86400000 }));
// Routes
app.get('/', home);
app.get('/profile', profile);


app.listen(process.env.PORT || 3001);*/

var express = require('express');
var path = require('path');
var handlebars = require('node-handlebars');

var home    = require ('./src/home');
var profile = require ('./src/profile');


var api = '78k1rpg2op74nh';
var secret = 'z7TukCpZTGk2FhG0';
var callback = 'http://127.0.0.1:3000/oauth/linkedin/callback';
var state = "i8XNjC4b8KVok4uw5RftR38Wgp2BFwql";


var Linkedin = require('node-linkedin')(api, secret, callback, state);

var linkedin = Linkedin.init('my_access_token', {
    timeout: 10000 /* 10 seconds */
});

var hbs = handlebars.create({ extension: 'html' });

var app = express();

app.set("view engine", "html");
app.engine("html", handlebars());
app.use('/assets', express.static(__dirname + '/assets', { maxAge:86400000 }));

app.get('/', home);
app.get('/profile', profile);



app.get('/oauth/linkedin', function(req, res) { 
Linkedin.auth.authorize(res, ['r_basicprofile','r_emailaddress','rw_company_admin','w_share'],state);//  , 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups', 'w_messages'
});

Linkedin.auth.authorize(['r_basicprofile','r_emailaddress','rw_company_admin','w_share'], state);
 

app.get('/oauth/linkedin/callback', function(req, res) {


Linkedin.auth.getAccessToken(res, req.query.code, state, function(err, results) {
  
   //console.log("codigo " + req.query.code); 
  if ( err )
  return console.error("eror"+err);
  console.log(results);

  var linkedin = Linkedin.init(results['access_token']);
  return linkedin.connections.retrieve(function(err, connections) {
                console.log(connections);
                var datos = [];
                for(var idx in connections.values) {
                    var contact = datos.values[idx];
                    datos.push({
                        FirstName: contact.firstName,
                        LastName: contact.lastName,
                        LinkedInID: contact.id
                    });
                }

                console.log(datos);
                res.setHeader('linkedinaccesstoken', results['access_token']);
                return res.end(JSON.stringify(datos));

                //return res.redirect('/profile?datos='+connections);
    });

  });
});




module.exports = app;