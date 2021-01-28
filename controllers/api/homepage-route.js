const router = require('express').Router();
const { Appointments, Timeblock, User } = require('../../models');

router.get('/', (req, res) => {
  console.log('======================');
  Appointments.findAll({
    where: {
      user_id: req.session.user_id
    },
    include: [
      {
        model: Appointments,
        attributes: ['id', 'Appointments_time', 'Appointments_date', 'Appointments_day', 'Appointments_text', 'user_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbAppointmentsData => {
      const posts = dbAppointmentsData.map(appointments => appointments.get({ plain: true }));
      console.log(appointments)
      res.render('homepage', {
        appointments,
        loggedIn: true
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;