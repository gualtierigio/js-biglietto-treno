let km = prompt("Quanti Km vuoi percorrere?");

let age = prompt("Quanti anni hai?");

const kmPrice = 0.21;

let ticketPrice = km * kmPrice;

const scontoVenti = (ticketPrice * 20) / 100;

const scontoQuaranta = (ticketPrice * 40) / 100;

if (age < 18) {
    finalPrice = ticketPrice - scontoVenti; 
}
else if (age > 65) {
    finalPrice = ticketPrice - scontoQuaranta;
}
else if (age >= 18 <= 65) {
    finalPrice = ticketPrice;
}

document.getElementById("finalPrice").innerHTML = finalPrice

finalPrice = (finalPrice.toFixed(2) + "$")