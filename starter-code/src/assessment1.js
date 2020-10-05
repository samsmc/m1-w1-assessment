// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}
product(10,5);

// Write a function that returns whether a given number is even

function isEven(num) {
  return %2 === 0;
}


// Return the largest of 2 numbers

function maxOfTwoNumbers(a, b) {
  if (a>b){
    return a;
  }else{
    return b;
    }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a,b,c);
}

// Calculate the sum of an array of numbers
var array = [1,2,3,4,5];
var sum = array.reduce(function(a,b){
  return a + b;
}, 0);
console.log(sum);


//function sumArray(numbers) {
  if(number.length === 0){
    return 0
  }
  return numbers.reduce((acc,currentValue) => acc + currentValue)
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (numbers.length === 0) {
    return 0
  }
  return Math.max(numbers);
}

// Return the longest string in an array
function longestString(strings) {
  var count1 = string[0];
  for (let i = 0; i<strings.lengh; i++){
    if(strings[i].length>count1.length){
      count = strings[i];
    }
  }
  return count1;
}
console.log(longestString(strings));

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
