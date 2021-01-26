
const router = require('express').Router();
const passport = require('passport');


// should be domain/api/login
router.get('/', async (req, res) => {
    res.render('login');
});

router.get('/home', isLoggedIn, (req, res) => {
    res.render('home');
});


router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that user name!' });
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
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

// should be domain/api/login/signup
router.get('/signup', (req, res) => {
    res.render('signup');
});

// should be domain/api/login/signin
router.get('/signin', (req, res) => {
    res.render('signin');
});

router.post(
    '/signup',
    passport.authenticate('local-signup', {
        successRedirect: '/home',
        failureRedirect: '/signup'
    })
);


router.post('/signin',
    passport.authenticate('local-signin', {
        successRedirect: '/home',
        failureRedirect: '/signin'
    })
);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect('/signin');
}



/*const router = require('express').Router();

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


*/
module.exports = router;