const router = require('express').Router();

//routes will use /api/login/ {route}

router.post('/', async (req, res) => {
//get route code here
res.send("this Login route was successful (post)");
});
    
router.put('/', async (req, res) => {
//put route code here
res.send("this Login route was successful (put)");
});

router.get('/', async (req, res) => {
//get route code here
res.send("this Login route was successful (get)");
});

router.delete('/', async (req, res) => {
//delete route code here
res.send("this Login route was successful (delete)");
});

module.exports = router;