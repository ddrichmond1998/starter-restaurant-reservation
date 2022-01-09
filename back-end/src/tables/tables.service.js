const knex = require("../db/connection");

// returns reservation for a specified date
function list(date) {
  return knex("reservations")
    .select("*")
    .where({ reservation_date: date })
    .orderBy("reservation_time");
}

// posts new reso and return it
function create(reservation) {
  return knex("reservations")
    .insert(reservation)
    .returning("*")
    .then((newReservations) => newReservations[0]);
}

module.exports = {
  list,
  create,
};