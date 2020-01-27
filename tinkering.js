function multiply(a,b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);


const whichSchool  = function (age) {
  let school = "";
  if (age < 13) {
    school = "Elementary School";
  } else if (age >= 13 && age <= 18) {
    school = "Secondary School";
  } else school = "Lighthouse Labs";

  return school;
}

console.log(whichSchool(13));