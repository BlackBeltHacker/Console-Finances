



var totalNumberOfMonths = finances.length;

var netTotalProfitLossesAmount = 0;

for (i = 0; i < finances.length; i++) {
    netTotalProfitLossesAmount += finances[i][1];
}




var totalChangeArray = [];

for (i = 0; i < finances.length; i++) {
    var one = finances[i][1];
    var two = finances[i+1][1];
    totalChangeArray.push(two - one);
}


var sumTotalChange = 0;
var lenChangeArray = totalChangeArray.length;

// for (var i = 0; i < lenChangeArray; i++) {
//     sumTotalChange  totalChangeArray[i];
// }


console.log(`Total number of Months: ${totalNumberOfMonths}`);
console.log(`Net Total: ${netTotalProfitLossesAmount}`);
console.log(`Total Change: ${totalChangeArray}`);

console.log(`Sum of Total Change ${sumTotalChange}`);
