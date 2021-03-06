require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors');


mongoose
  .connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//CORS 
app.use(cors({
  //origin: ['https://colorydestellos.herokuapp.com']
  //origin: ['http://localhost:3000']
  origin:['http://www.colorydestellos.com']
}));

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Color y Destellos';



const index =       require('./routes/index');
const auth =        require('./routes/auth');
const stylist =     require('./routes/stylist');
const technique =   require('./routes/technique');
const appointment = require('./routes/appointment');


app.use('/api/auth',auth);
app.use('/api/stylist',stylist);
app.use('/api/technique',technique);
app.use('/api/appointment',appointment);
app.use('/', index);
app.all("*", (req,res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});
module.exports = app;
