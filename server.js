const routes = require('./routes');
const Express = require('express');
const exphbs = require('express-handlebars');

const app = Express();
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

// const hbs = exphbs.create({ helpers });

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// will need to transfer route to controllers, for testing only
app.get('/', (req, res) => {
  res.render('login');
});

app.use(Express.static('/public'));

const PORT = process.env.PORT || 3003;

app.use(routes);

//starts the server
app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});
