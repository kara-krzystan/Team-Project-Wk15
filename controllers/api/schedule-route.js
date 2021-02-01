const router = require('express').Router();
const { Appointment, Timeblock, User } = require('../../models');
//routes will use /api/schedule/ {route}

router.post('/all', async (req, res) => {
  const {
    Appointments_time,
    Appointments_date,
    Appointments_day,
    Appointments_text,
    Appointments_type,
    user_id,
  } = req.body;
  const appointments = await Appointment.create({
    Appointments_time: Appointments_time,
    Appointments_date: Appointments_date,
    Appointments_day: Appointments_day,
    Appointments_text: Appointments_text,
    Appointments_type: Appointments_type,
    user_id,
  })
    .then(appointments => res.json(appointments))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/', async (req, res) => {
  //put route code here
  res.send('this Schedule route was successful (put)');
});

//renders main scheduling page
router.get('/', async (req, res) => {
  const { user_id } = req.session;
  console.log(user_id);
  console.log('======================');
  let userSomething = await User.findOne({
    where: {
      id: user_id,
    }
  });
  console.log(userSomething);
  try{
    let appointments = await Appointment.findAll({
      // where: {
      //   user_id: req.session.user_id,
      // },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        Timeblock,
      ],
    }).then(appointments => 
      appointments.map(appointment => appointment.get({ plain: true }))
    );
    res.render('scheduling', {
      appointments,
      loggedIn: true,
      userSomething,
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});

router.get('/all', async (req, res) => {
  const appointments = await Appointment.findAll({
    // include: [
    //   {
    //     model: User,
    //   },
    // ],
  });
  console.log(appointments[1].Appointments_time);
  res.json(appointments);
});

router.get('/:user', async (req, res) => {
  const { user } = req.params;
  const { id } = await User.findOne({
    where: {
      username: user,
    },
  });
  const appointments = await Appointment.findAll({
    where: {
      user_id: id,
    },
  });
});

router.post('/ID/:appt', async (req, res) => {
  const { appt } = req.params;
  console.log(appt + "  <--------------- the number is here");
  req.session.User ? console.log(req.session.User) : console.log(req.session.user_id)
  let {
      Appointments_time, 
      Appointments_date, 
      Appointments_day, 
      Appointments_text, 
      Appointments_type,
        } = await Appointment.findOne({
    where: {
      id: appt,
    }
  })
  let appointment = await Appointment.create({
    Appointments_time, 
    Appointments_date, 
    Appointments_day, 
    Appointments_text, 
    Appointments_type,
    user_id: req.session.user_id,
  })
  console.log("hello, " + appt);
  res.send(appt);
})

router.delete('/', async (req, res) => {
  //delete route code here
  res.send('this Schedule route was successful (delete)');
});

module.exports = router;
