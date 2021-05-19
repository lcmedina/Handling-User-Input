// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
// good -> 20% fair -> 15% bad -> 10%

function tipAmount(bill, srvRating) {
    if (srvRating == "good") {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(bill * .2);
    } else if (srvRating == "fair") {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(bill * .15);
    } else if (srvRating == "bad") {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(bill * .1);
    }
}
console.log(tipAmount(100, "good"));

// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.


function totalAmount(bill, srvRating) {
    return tipAmount(bill, srvRating) + Number.parseFloat(bill);
}
console.log(totalAmount(100, "good"));

