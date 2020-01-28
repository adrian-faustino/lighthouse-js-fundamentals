// function multiply(a,b) {
//   return a * b;
// }

// const result = multiply(2, 4);

// //console.log(result);


// const whichSchool  = function (age) {
//   let school = "";
//   if (age < 13) {
//     school = "Elementary School";
//   } else if (age >= 13 && age <= 18) {
//     school = "Secondary School";
//   } else school = "Lighthouse Labs";

//   return school;
// }

// //console.log(whichSchool(13));

// //Build a Triangle Udacity (5-3)
// /*
//  * Programming Quiz: Build A Triangle (5-3)
//  */

// // creates a line of * for a given length
// function makeLine(length) {
//   var line = "";
//   for (var j = 1; j <= length; j++) {
//       line += "* ";
//   }
//   return line + "\n";
// }

// // your code goes here.  Make sure you call makeLine() in your own code.

// function buildTriangle(width) {
//   let triangle = "";
//   for (let i = 1; i <= width; i++) {
//     triangle = triangle + makeLine(i);
//   }
//   return triangle;
// }

// // test your code by uncommenting the following line
// //console.log(buildTriangle(5));

// /*
//  * Programming Quiz: Laugh (5-4)
//  */

// let laugh = function(n) {
//   let newStr = "";
//   let counter = n;
//   while (counter>0) {
//     newStr += "ha"; 
//     counter--;
//   }
//   return newStr + "!";
// };

// //console.log(laugh(10));

// /*
//  * Programming Quiz: Cry (5-5)
//  */

// // your code goes here
// let cry = function crybaby() {
//   return "boohoo!";
// };

// //console.log(cry());

// /*
//  * Programming Quiz: Inline Functions (5-6)
//  */

// // don't change this code
// function emotions(myString, myFunc) {
//   console.log("I am " + myString + ", " + myFunc(2));
// }

// // your code goes here
// // call the emotions function here and pass in an
// // inline function expression
// emotions("happy", function laugh(n){
//   let newStr =""
//   let counter = n;
//   while (counter >0) {
//     newStr += "ha";
//     counter--;
//   }
//   return newStr + "!";
// })

// // Age Calculator Exercise
// function ageCalculator(name, yearOfBirth, currentYear) {
//   let age = currentYear - yearOfBirth;
//   return name + " is " + age + " years old.";
// }

// console.log(ageCalculator("Miranda", 1983, 2015));


// // How Many Hundreds exercise
// function howManyHundreds(num) {
//   let cutNum;
//   let extra = num % 100;
//   cutNum = num - extra;
//   return cutNum / 100;
// }

// console.log(howManyHundreds(894));

// function calculateRectangleArea(length, width) {
//   if (length < 0 || width < 0) {
//     return undefined;
//   }
//   return length * width;
// }

// function calculateTriangleArea(base, height) {
//   if (base < 0 || height < 0) {
//     return undefined;
//   }
//   return (base * height)/2;
// }

// function calculateCircleArea(radius) {
//   if (radius < 0) {
//     return undefined;
//   }
//   return Math.PI * (radius * radius);
// }

// console.log(calculateCircleArea(10));




/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

// var bills = [50.23, 19.12, 34.01,
//   100.11, 12.15, 9.90, 29.11, 12.99,
//   10.00, 99.22, 102.20, 100.10, 6.77, 2.22
// ];

// let totals = bills.map(function(num){
//   num = num*1.15;
//   return Number(num.toFixed(2));
// });

// console.log(totals);

/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
// for (let row = 0; row < numbers.length; row++) {
//   for (let column = 0; column < numbers[row].length; column++) {
//     if(numbers[row][column] % 2 === 0) {
//       numbers[row][column] = "even";
//     } else numbers[row][column] = "odd";
//   } 
// }

// console.log(numbers);

// function range(start, end, step) {
//   let newArr = [];
  
//   if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
//     return newArr;
//   }

//   let times = (end - start) / step;
//   let counter = 0;
//   while (counter <= times) {
//     newArr[counter] = start;
//     counter++;
//     start += step;
//   }
//   return newArr;
// }

// console.log(range(-5, 2, 3));

// function lastIndexOf(arr, val) {
//   let lastIndex = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       lastIndex = i;
//     }
//   }
//   return lastIndex;
// }

// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
// console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
// console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
// console.log(lastIndexOf([], 3), "=?", -1);

// LOOPY LIGHTHOUSE 2 assignment
// function loopyLighthouse(range, multiples, words) {
//   if (range[0] > range[1]) {
//     return;
//   }
//   for (let i = range[0]; i <= range[1]; i++) {
//     if (i % multiples[0] === 0 && i % multiples[1] === 0) {
//       console.log(words[0] + words[1]);
//     }  if (i % multiples[0] === 0) {
//       console.log(words[0]);
//     } else if (i % multiples[1] === 0) {
//       console.log(words[1]);
//     } else console.log(i);
//   }
// }

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

// function concat(a,b) {
//   let newArr = [];

//   for (let i = 0; i < a.length; i++) {
//     newArr.push(a[i]);
//   }

//   for (let i = 0; i < b.length; i++) {
//     newArr.push(b[i]);
//   }

//   return newArr;
// }


// console.log(concat([1,2,3],[]));


// function concat(a,b) {
//   let newArr = [];

//   for (let i = 0; i < a.length; i++) {
//     newArr.push(a[i]);
//   }

//   for (let i = 0; i < b.length; i++) {
//     newArr.push(b[i]);
//   }

//   return newArr;
// }
// function merge(a,b) {
//   let newArr = concat(a,b);
//   return newArr.sort()
// }

// console.log(merge([1,5,2],[7,3,9]));

// OBJECTS - UDACITY

// let breakfast = {
//   name: "The Lumberjack",
//   price: 9.95,
//   ingredients: ['eggs','sausage','toast','hashbrowns','pancakes']
// };

// var savingsAccount = {
//   balance: 1000,
//   interestRatePercent: 1,
//   deposit: function addMoney(amount) {
//     if (amount > 0) {
//       savingsAccount.balance += amount;
//     }
//   },
//   withdraw: function removeMoney(amount) {
//     var verifyBalance = savingsAccount.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       savingsAccount.balance -= amount;
//     }
//   },
//   printAccountSummary: function() {
//     return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
//   }
// };

// console.log(savingsAccount.printAccountSummary());

// let facebookProfile = {
//   name: "Adrian",
//   friends: 200,
//   messages: ["Hello", "World"],
//   postMessage: function(message) {
//     return this.messages.push(message); //do I need return here?
//   },
//   deleteMessage: function(index) {
//     return this.messages.splice(index, 1);
//   },
//   addFriend: function() {
//     return this.friends += 1;
//   },
//   removeFriend: function() {
//     return this.friends -= 1;
//   }
// };

// console.log(facebookProfile.friends);

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

// var donuts = [
//   { type: "Jelly", cost: 1.22 },
//   { type: "Chocolate", cost: 2.45 },
//   { type: "Cider", cost: 1.59 },
//   { type: "Boston Cream", cost: 5.99 }
// ];

// // your code goes here
// donuts.forEach(function(value, num){
//   console.log(donuts[num]["type"] + " donuts cost $" + donuts[num]["cost"] + " each");
// });