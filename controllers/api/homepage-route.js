const router = require('express').Router();
const { Appointment, Timeblock, User } = require('../../models');

router.get('/', (req, res) => {
  console.log('======================');
  Appointment.findAll({
    include: [
      {
        model: Appointment,
        attributes: ['id', 'Appointment_time', 'Appointments_date', 'Appointments_day', 'Appointments_text', 'user_id'],
        include: {
          model: User,
          attributes: ['user']
        }
      },
      {
        model: User,
        attributes: ['user']
      }
    ]
  })
    .then(dbAppointmentData => {
      const posts = dbAppointmentData.map(appointment => appointment.get({ plain: true }));
      console.log(appointments)
      res.render('homepage', {
        appointments,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;