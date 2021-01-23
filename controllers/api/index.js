const router = require('express').Router();
const adminRoute = require('./admin-route');
const loginRoute = require('./login-route');
const scheduleRoute = require('./schedule-route');
const userRoute = require('./user-route');

router.use('/user', userRoute);
router.use('/admin', adminRoute);
router.use('/login', loginRoute);
router.use('/schedule', scheduleRoute);

module.exports = router;
