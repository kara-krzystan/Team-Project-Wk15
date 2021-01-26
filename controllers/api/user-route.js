const router = require('express').Router();
const { User } = require("../../models")
//routes will use /api/User/ {route}

router.post('/login', (req, res) => {
  debugger
  console.log("hi")
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});
router.put('/', async (req, res) => {
  //put route code here
  res.send("this User route was successful (put)");
});

router.get('/', async (req, res) => {
  //get route code here
  res.send("this User route was successful (get)");
});

router.delete('/', async (req, res) => {
  //delete route code here
  res.send("this User route was successful (delete)");
});

module.exports = router;