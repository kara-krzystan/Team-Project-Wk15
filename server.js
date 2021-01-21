
const express = require('express');
const exphbs = require('express-handlebars');


const PORT = process.env.PORT || 3003;
const app = express();


// const hbs = exphbs.create({ helpers });

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// will need to transfer route to controllers, for testing only
app.get('/', (req, res) => {
  res.render('login');
});

//static folder to be decided
//app.use(express.static('/public')

// configure handlebars (or pug, if you prefer)
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// configure using our exported passport function.
// we need to pass the express app we want configured!
// order is important! you need to set up passport
// before you start using it in your routes.
require('./passport')(app);

// use the routes we configured.
app.use(require('./routes'));

// Here's a little custom error handling middleware
// that logs the error to console, then renders an
// error page describing the error.
app.use((error, req, res, next) => {
  console.error(error);
  res.render('error', {
    user: req.user,
    error
  });
});


app.use(routes);

//starts the server
app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});

