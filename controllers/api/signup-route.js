const router = require('express').Router();

//routes will use /api/SignUp/ {route}

router.post('/', async (req, res) => {
//get route code here
res.send("this SignUp route was successful (post)");
});

router.put('/', async (req, res) => {
//put route code here
res.send("this SignUp route was successful (put)");
});

router.get('/', async (req, res) => {
//get route code here
res.render('signup');
});

router.delete('/', async (req, res) => {
//delete route code here
res.send("this SignUp route was successful (delete)");
});

module.exports = router;