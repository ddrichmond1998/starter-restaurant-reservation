const knex = require("../db/connection");

// returns active/unfulfilled reservations for specified date
function searchByDate(date) {
  return knex("reservations")
    .select("*")
    .where({ reservation_date: date })
    .whereNot("status", "finished")
    .orderBy("reservation_time");
}

//phone number search
function searchByPhone(mobile_number) {
  return knex("reservations")
    .whereRaw(
      "translate(mobile_number, '() -', '') like ?",
      `%${mobile_number.replace(/\D/g, "")}%`
    )
    .orderBy("reservation_date");
}

// returns reservation by id
function read(id) {
  return knex("reservations")
    .select("*")
    .where({ reservation_id: Number(id) })
    .then((result) => result[0]);
}

// posts & returns new reservation 
function create(reservation) {
  return knex("reservations")
    .insert(reservation)
    .returning("*")
    .then((result) => result[0]);
}

// updates reservation status
function updateStatus(reservation_id, status) {
  return knex("reservations").where({ reservation_id }).update({ status }, "*");
}

// updates reservation
function update(reservation_id, updatedReservation) {
  return knex("reservations")
    .where({ reservation_id })
    .update(updatedReservation, "*")
    .then((result) => result[0]);
}

module.exports = {
  searchByDate,
  searchByPhone,
  create,
  read,
  updateStatus,
  update,
};