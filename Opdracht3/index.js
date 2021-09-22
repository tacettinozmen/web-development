// Verander deze input om te zien of je code werkt.
// Comment bijvoorbeeld regel 8 tot 11 weer aan, en regel 3 tot 5 uit.
const age = 28;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Sarah";
const totalAmount = 120;


/** 50% korting check voor 18 jaar + onder 25 jaar of gelijk**/
if (age >= 18 && age <= 25) {
    console.log("Je mag naar binnen, en je krijgt 50% korting!");
}
/** check voor 18 jaar **/
else if (age >= 18) {
    console.log("Je mag naar binnen");
}
else {
    console.log("Nope, je mag niet naar binnen");
}



if (isFemale) {
    console.log("Je ticket zegt dat je een vrouw bent!");
} else {
    console.log(
        "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
    );
}

if (driverStatus === "bob") {
    console.log("Je bent de bob, je mag autorijden");
} else {
    console.log("Je bent geen bob, hier met die autosleutels");
}

if (firstName === "Sarah" || "Bram") {
    console.log("Je kroeg bestaat 50 jaar en trakteert jou met een gratis biertje!");
} else {
    console.log("");
}


if (totalAmount > 24 && totalAmount < 50) {
    console.log("Je hebt meer dan 25 euro aan drankjes besteld, je ontvangt gratis (vega)bitterballen!");
}
else if (totalAmount > 49 && totalAmount < 100) {
    console.log("Je hebt meer dan 50 euro aan drankjes besteld, je ontvangt gratis portie nachos!");
}
else if (totalAmount > 99) {
    console.log("Je hebt meer dan 100 euro aan drankjes besteld, je ontvangt gratis flesje champagne!");
}
else {
    console.log("");
}