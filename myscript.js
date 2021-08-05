let Km = prompt("Quanti Km vuoi percorrere?");

let Age = prompt("Quanti anni hai?");

const KmPrice = (0,21);

let TicketPrice = Km * KmPrice;

const ScontoVenti = (TicketPrice * 20) / 100;

const ScontoQuaranta = (TicketPrice * 40) / 100;

if (Age < 18) {
    FinalPrice = TicketPrice - ScontoVenti; 
}
else if (Age > 65) {
    FinalPrice = TicketPrice - ScontoQuaranta;
}

console.log(FinalPrice)

document.getElementById(FinalPrice).innerHTML