module.exports = (app, passport) => {
    app.get('/', (req, res) => {
        res.render('layouts/main');
    });

    app.get('/signup', (req, res) => {
        res.render('signup');
    });

    app.get('/signin', (req, res) => {
        res.render('signin');
    });

    app.post(
        '/signup',
        passport.authenticate('local-signup', {
        successRedirect: '/home',
        failureRedirect: '/signup'
        })
    );

    app.get('/home', isLoggedIn, (req, res) => {
        res.render('home');
    });

    app.get('/logout', (req, res) => {
        req.session.destroy(err => {
        res.redirect('/');
        });
    });

    app.post('/signin',
        passport.authenticate('local-signin', {
        successRedirect: '/home',
        failureRedirect: '/signin'
        })
    );

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) return next();

        res.redirect('/signin');
    }
};
  

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

module.exports = router;
*/