const { Appointment } = require('../models');

const appointmentdata = [
  {
    Appointments_time: '7:00 AM',
    Appointments_date: 7,
    Appointments_day: 'Sunday',
    Appointments_text: 'Routine checkup',
    Appointments_type: 'Checkup',
    user_id: 1,
  },
  {
    Appointments_time: '10:00 AM',
    Appointments_date: 5,
    Appointments_day: 'Friday',
    Appointments_text: 'Runny nose',
    Appointments_type: 'Follow up',
    user_id: 2,
  },
];

const seedPosts = () => Appointment.bulkCreate(appointmentdata);

module.exports = seedPosts;
