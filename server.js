//required packages and files
const express= require('express');
const exphbs= require('express-handlebars');
const path= require('path');

const sequelize= require('./config/connection');

//port
const app= express();
const PORT= proccess.env.PORT || 3002;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
