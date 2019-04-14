/* 
* MIT License

* Copyright (c) 2019 Nehemiah

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

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

if (Math.abs(avgTwo - avg) <= toleranceLimit) {
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
