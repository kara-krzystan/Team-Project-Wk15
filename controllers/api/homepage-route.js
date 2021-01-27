const router = require('express').Router();
const { Appointment, Timeblock, User } = require('../../models');

router.get('/', async (req, res) => {
  res.render('homepage');
});



module.exports = router;