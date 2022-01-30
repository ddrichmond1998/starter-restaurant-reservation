import React from "react";
import Reservation from "../reservation/Reservation";
import LoadingWheel from "../../widgets/LoadingWheel";

function ReservationsList({ reservations }) {
  const noReservationsMessage = (
    <span className="mx-auto">No reservations found.</span>
  );

  //Spinning wheel displays when loading from API or if no valid return found
  const noReservations =
    reservations === "loading" ? <LoadingWheel /> : noReservationsMessage;

  let reservationsMapped;
  let reservationsList = null;
  const currentReservations = [];
  const finishedReservations = [];

  // waits for 'loading' to be replaced by array of reservations
  if (reservations.length && reservations !== "loading") {
    //  prevents finished reservations from being displayed
    reservations.forEach((res) => {
      if (["finished"].includes(res.status)) {
        finishedReservations.push(res);
      } else {
        currentReservations.push(res);
      }
    });

    reservationsMapped = currentReservations.map((res, index) => (
      <Reservation key={index} reservation={res} />
    ));
    reservationsList = <div className="card-deck">{reservationsMapped}</div>;
  }

  return reservationsList ?? noReservations;
}

export default ReservationsList;