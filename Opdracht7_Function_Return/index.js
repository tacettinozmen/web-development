/*
const numberChecker = function (number) {
    
    if (number > 100){
        return true;
    } else
    return false;

}

const number = numberChecker(80);
console.log(number);


// Opdracht 2 - Brenda the Bouncer Bot

const visitorChecker = function (age, people) {
    
    if (age <18) 
    {return "This is a club for adults"}

    else if (people >500)
    {return "Its too busy now, come back later" }
        
    else
    {return "Welcome"}
   
    
}

const allow = visitorChecker(18,600);

console.log(allow);
*/

//Calculating the average


const average = function (numbers) {
    const gemiddelde = numbers.reduce((total, n) => total + n) / numbers.length;
    return gemiddelde;
}

const numbers = [7, 7, 6, 6, 6];
console.log(average(numbers));