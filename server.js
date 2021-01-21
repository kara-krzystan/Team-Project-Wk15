const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// will need to transfer route to controllers, for testing only
app.get('/', (req, res) => {
  res.render('login');
});

//starts the server
app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});
