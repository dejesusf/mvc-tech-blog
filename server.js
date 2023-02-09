//required packages and files
const express= require('express');
const session= require('express-session');
const exphbs= require('express-handlebars');
const path= require('path');
const SequelizeStore=require('connect-session-sequelize')(session.Store);
const allRoutes= require('./routes');

const sequelize= require('./config/connection');

//port
const app= express();
const PORT= process.env.PORT || 3002;
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
      maxAge:1000*60*60*2
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize
  })
};
app.use(session(sess));

//use express for data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static directory
app.use(express.static(path.join(__dirname, 'public')));

//handlebars
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//connect routes
app.use(allRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
