const { Appointment } = require('../models');

const appointmentdata = [
  {
    Appointments_time: 2,
    Appointments_date: 7,
    Appointments_day: 'Sunday',
    Appointments_text: 'Routine checkup',
    Appointments_type: 'Checkup',
    user_id: 1,
  },
  {
    Appointments_time: 5,
    Appointments_date: 5,
    Appointments_day: 'Friday',
    Appointments_text: 'Runny nose',
    Appointments_type: 'Follow up',
    user_id: 2,
  },
];

const seedPosts = () => Appointment.bulkCreate(appointmentdata);

module.exports = seedPosts;
