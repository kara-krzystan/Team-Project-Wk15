const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static folder to be decided
//app.use(express.static('/public'));

const PORT = process.env.PORT || 3003;

//starts the server
app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});