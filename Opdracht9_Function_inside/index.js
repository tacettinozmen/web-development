/*
const ageCheck = function (age) {
    console.log("check op boven 18 wordt uitgevoerd....");
    console.log(age);
    if (age >= 18) {
    return true;
    }
    return false;
    
};

const ageGreet = function (waarde) {

    console.log("check waar of niet waar....");
    console.log(waarde);

    if (waarde == true) {
    console.log ("Hello there");
    } else {
    console.log ("Hey Kiddo");
    }
};
*/


// (ageGreet)(ageCheck(10));


// VAT exercise 1

/*
const btwPerc = function (number) {
    const btwbedrag = (number * vatamount);
    console.log (btwbedrag);
    return btwbedrag;
    }

  

const btwBedrag = function (number) {
    const bedragmetbtw = btwPerc(number) + number;
    console.log (bedragmetbtw);
    return bedragmetbtw;
}

let vatamount = 0.21;
btwBedrag(10);
*/


/*
VAT exercise 2
In this exercise we're going to calculate the base price and VAT amount. 
The main function you make should take the amount including VAT and the 
VAT percentage. The return value should be an array with two elements: 
base price and VAT amount. Again: make sure you use two functions, 
where the main one calls another function to do part of the calculation.
*/

const btwPerc = function (number) {
    const btwbedrag = (number / (   vatamount+1));
    console.log (btwbedrag);
    return btwbedrag;
    }

  

const btwBedrag = function (number) {
    const bedragmetbtw = btwPerc(number) - number;
    console.log (bedragmetbtw);
    return bedragmetbtw;
}

let vatamount = 0.21;
btwBedrag(500);
