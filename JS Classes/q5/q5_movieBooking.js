"use strict";

function bookTicket() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    const nameReg = /^[A-Za-z ]+$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameReg.test(name)) {
        show(" Invalid Name");
        return;
    }

    if (!emailReg.test(email)) {
        show(" Invalid Email");
        return;
    }

    if (isNaN(seats) || seats < 1 || seats > 10) {
        show(" Seats must be between 1 to 10");
        return;
    }

    // Store booking
    const booking = {
        name,
        email,
        seats
    };

    show(` Ticket Booked!<br>Name: ${booking.name}<br>Email: ${booking.email}<br>Seats: ${booking.seats}`);
}

function show(msg) {
    document.getElementById("result").innerHTML = msg;
}
