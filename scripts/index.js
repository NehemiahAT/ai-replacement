var trainingData = []; /* Put data in this array in the form of numbers. */

var cnt = trainingData.length; /* Find the amount of mumbers in the trainingData array. */

var sum = trainingData.reduce(add);

function add(accumulator, a) {
   return accumulator + a;
} /* Find the sum of all the numbers in the trainingData array. */

var avg = sum / cnt; /* Find the average of the trainingData. */

var newData = null; /* Data that can be used to determine the answer to
* answer the question this was designed to answer. */

var trainingDataNewData = trainingData.concat(newData);

var cntTwo = trainingDataNewData.length;

var sumTwo = trainingDataNewData.reduce(addTwo);

function addTwo(accumulator, a) {
   return accumulator + a;
} /* Find the sum of all the numbers in the trainingDataNewData array. */

var avgTwo = sumTwo / cntTwo; /* Find the average of the trainingDataNewData. */

var toleranceLimit = null; /* Put the tolerance limit here. */

function decision() {

if (Math.abs(avgTwo - avg) < toleranceLimit) {
return true;
} 

else if (avgTwo === avg) {
return true;
} 

else {
return false;
}

}

console.log(decision());
