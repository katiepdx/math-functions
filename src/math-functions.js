/* eslint-disable no-unused-vars */

/////////////////////////////////////
/* Problem 1

Write a function called sum() that takes in two numbers as arguments and 
then returns an array where the first element is the sum of those numbers, 
and the second element is a concatenated string that EXACTLY follows this 
example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."
*/

export function sum(a, b) {
    const sumOfAAndB = a + b;
    const strAnswerOfAPlusB = ('The sum of ' + a + ' and ' + b + ' is ' + sumOfAAndB + '.');  
    const sumAnswerArray = [sumOfAAndB, strAnswerOfAPlusB];
    return sumAnswerArray;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."
*/

export function multiply(a, b) {
    const multiplyAAndB = a * b;
    const strAnswerOfATimesB = ('The product of ' + a + ' and ' + b + ' is ' + multiplyAAndB + '.');  
    const multiplyAnswerArray = [multiplyAAndB, strAnswerOfATimesB];
    return multiplyAnswerArray;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiplyThreeNumbers() that takes in three 
numbers as separate arguments and returns 
an array where the first element is the sum of those three numbers, 
the second element is the product of those three numbers,  
and the third and fourth elements are strings that EXACTLY follow this example and 
use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. 
To do addition, use your sum() function, and to do multiplication, use your multiply() 
function that you've already created. You're going to have to be resourceful to figure out 
how to do this. However, you may continue to use the + operator for string concatenation.
*/

export function sumAndMultiplyThreeNumbers(a, b, c) { //eslint-disable-line
    const sumOfAAndB = sum(a, b)[0];
    const sumOfABC = sum(sumOfAAndB, c)[0];
    const multiplyAAndB = multiply(a, b)[0];
    const productOfABC = multiply(multiplyAAndB, c)[0];
    const strAnswerOfSumOfABC = (a + ' and ' + b + ' and ' + c + ' sum to ' + sumOfABC + '.');  
    const strAnswerOfProductOfABC = ('The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + productOfABC + '.');  
    const sumAndMultiplyThreeNumbersAnswer = [sumOfABC, productOfABC, strAnswerOfSumOfABC, strAnswerOfProductOfABC];
    return sumAndMultiplyThreeNumbersAnswer;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArrayWithThreeNumbers() that takes in an array of numbers 
as its single argument and then returns an array where the first element is the sum 
of the numbers in the array, and the second element is a string that EXACTLY follows 
this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. 
To do addition, use your sum() function that you've already created. You're going to 
have to be resourceful to figure out how to do this. However, you may continue 
to use the + operator for string concatenation.
*/

export function sumArrayWithThreeNumbers(sumArr) {
    const num1 = sumArr[0];
    const num2 = sumArr[1];
    const num3 = sumArr[2];

    const sumArrayAB = sum(num1, num2)[0];
    const sumArrayABC = sum(sumArrayAB, num3)[0];
    const strAnswerSumArrayABC = [sumArrayABC, `${num1},${num2},${num3} was passed in as an array of numbers, and ${sumArrayABC} is their sum.`];
    return strAnswerSumArrayABC;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArrayWithThreeNumbers() that takes an array of numbers 
as its argument and returns an array whose first element is the product of those numbers, 
and the second element is a string that EXACTLY follows this example and uses the values 
that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. 
To do multiplication, use your multiply() function that you've already created. 
You're going to have to be resourceful to figure out how to do this. 
This function should handle an array containing three elements. However, 
you may continue to use the + operator for string concatenation.
*/

export function multiplyArrayWithThreeNumbers(multArr) { //eslint-disable-line
    const num1 = multArr[0];
    const num2 = multArr[1];
    const num3 = multArr[2];

    const multArrayAB = multiply(num1, num2)[0];
    const multArrayABC = multiply(multArrayAB, num3)[0];
    const strAnswerMultArrayABC = [multArrayABC, `The numbers ${num1},${num2},${num3} have a product of ${multArrayABC}.`];
    return strAnswerMultArrayABC;
}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.
*/

export function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 
// You're done! Submit the link to the repo following the instructions in Canvas.
