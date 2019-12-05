var totalEl = document.getElementById("total");
var percentEl = document.getElementById("percent");
var submitEl = document.getElementById("submit");
var tipAmountEl = document.getElementById("tip-amount");
var newTotalEl = document.getElementById("new-total");

var splitEl = document.getElementById("split");
var splitTotalEl = document.getElementById("splitTotal");


function calculate(total, percent) {
    var newTotal = total + (total * (percent / 100));
    return newTotal; 
};

submitEl.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event);
    var newTotal;
    newTotal = calculate(parseInt(totalEl.value), parseInt(percentEl.value));
    tipAmountEl.textContent = parseInt(newTotal) - parseInt(totalEl.value);
    newTotalEl.textContent = parseInt(newTotal);
    console.log(newTotal);
});


function splitTotal(newTotal, numPeople) {
    var splitTotal;
    splitTotal = newTotal / numPeople;
    return splitTotal.toFixed(2);
}

console.log(splitTotal(120, 2));

