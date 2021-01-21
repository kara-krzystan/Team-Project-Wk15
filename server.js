const express = require("express");
const routes = require('./routes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static folder to be decided
//app.use(express.static('/public'));

const PORT = process.env.PORT || 3003;

app.use(routes);

//starts the server
app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});