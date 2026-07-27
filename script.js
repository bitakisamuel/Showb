function calculate(){

let showPrice=document.getElementById("show").value;

let seats=document.getElementById("seat").value;

let total=showPrice*seats;

document.getElementById("total").innerHTML="Total: Ksh "+total;

}

function bookShow(show, price){

    document.getElementById("selectedShow").value = show;

    document.getElementById("ticketPrice").value = "Ksh " + price;

    document.getElementById("bookings").scrollIntoView({
        behavior: "smooth"
    });

}
