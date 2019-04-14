# Smarty-Pants Computer
Smarty-Pants Computer is a JavaScript library that is built to do complicated things (complicated to a computer, anyway) without the help 
of AI. There are a few steps to using it. The first is to download the JavaScript file index.js from this repository. Then, you must put 
your JavaScript in a script tag with an `src` attrabute with a file path to wherever the index.js file is to implement the library. Then, 
once the library is implemented, you must give the training data and the data you wish to evaluate. This repository is built to give a 
"yes" or "no" evaluations, so you must string multiple implementations of this library to make multiple-choice evaluations. The training 
data is the things that should get a "yes" answer from the computer. For example, if you want to know wether something a person drew was 
supposed to be a square, you would give a bunch of pictures of handdrawn squares as training data. The training data must be given in 
numbers, usally converted from another type of data. The conversion must all be done in the same way, though you may use any kind of 
conversion you wish. Assign the training data to the `trainingData` variable in the form of new numbers in an array. The data you wish 
to evaluate shall also be in the form of numbers, converted in the same way as the training data. It should be put into the `newData` 
variable, one number at a time and in the form of a regular number in a regular variable. Then, you must assign a number to the 
`toleranceLimit` variable. This variable is what you think should be the maximum amount the average of the training data and the data you 
wish you evaluate should fluctuate before the library should give a "no" answer.

What the computer thinks about your data you wish for the computer to evaluate will be in the console after you give it the data it needs. 
It will answer "true" or "false" for "yes" or "no," respectively. 

Note: all the variables are built-in. You don't need to declare them yourself.
