function multiply(a,b) {
  return a * b;
}

const result = multiply(2, 4);

//console.log(result);


const whichSchool  = function (age) {
  let school = "";
  if (age < 13) {
    school = "Elementary School";
  } else if (age >= 13 && age <= 18) {
    school = "Secondary School";
  } else school = "Lighthouse Labs";

  return school;
}

//console.log(whichSchool(13));

//Build a Triangle Udacity (5-3)
/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(width) {
  let triangle = "";
  for (let i = 1; i <= width; i++) {
    triangle = triangle + makeLine(i);
  }
  return triangle;
}

// test your code by uncommenting the following line
//console.log(buildTriangle(5));

/*
 * Programming Quiz: Laugh (5-4)
 */

let laugh = function(n) {
  let newStr = "";
  let counter = n;
  while (counter>0) {
    newStr += "ha"; 
    counter--;
  }
  return newStr + "!";
};

//console.log(laugh(10));

/*
 * Programming Quiz: Cry (5-5)
 */

// your code goes here
let cry = function crybaby() {
  return "boohoo!";
};

//console.log(cry());

/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions("happy", function laugh(n){
  let newStr =""
  let counter = n;
  while (counter >0) {
    newStr += "ha";
    counter--;
  }
  return newStr + "!";
})