const bodyParser = require('body-parser');
const express = require('express');


const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Give access to the public (for css and images) and node_modules (for bootstrap) folder
app.use(express.static('./public'));
app.use(express.static('./node_modules'));


//Allow handlebars to be use to render the view
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);




// Load up all of the controllers
const controllers = require('./controllers');
app.use(controllers);

//Listen to the port and run the server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server is up and running on port: ${PORT}`));
}

module.exports = app;
