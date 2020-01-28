const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

function whileLoopArr(arr) {
  let counter = 0;
  while (counter < arr.length) {
    console.log(arr[counter]);
    counter++;
  }
}

// Write a for loop that prints out the contents of ingredients:

function forLoopArr(arr) {
  for (let counter = 0; counter < arr.length; counter++) {
    console.log(arr[counter]);
  }
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

function reverseArr(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

console.log("-->While loop");
whileLoopArr(ingredients);
console.log("-->For loop");
forLoopArr(ingredients);
console.log("-->Reverse array");
reverseArr(ingredients);