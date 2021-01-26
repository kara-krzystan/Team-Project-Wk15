const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// const adminRoute = require('./api/admin-route');
// const loginRoute = require('./api/login-route');
// const scheduleRoute = require('./api/schedule-route');
// const userRoute = require('./api/user-route');

// router.use('/user', userRoute);
// router.use('/admin', adminRoute);
// router.use('/login', loginRoute);
// router.use('/schedule', scheduleRoute);

router.use('/', (req, res) => {
  res.render('index');
});



module.exports = router;