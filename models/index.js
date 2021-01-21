const User = require('./User');
const Appointment = require('./Appointments');




Appointment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.hasMany(Appointment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});



module.exports = { User, Appointment };