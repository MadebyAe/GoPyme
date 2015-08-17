// Import
import express    from 'express'
import handlebars from 'node-handlebars'
import linkedin   from 'node-linkedin'
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


app.listen(process.env.PORT || 3001);