/*
1. exit code
2. return any required data.
*/

function sayMyName() {
  let first_name = "Samson"; //statement 1
  console.log(`First Name ${first_name}`);// statement 2
  let second_name = "Johnna";//statement 3
  console.log(`Second Name ${second_name}`);//statement 4
  let full_name = `$(first_name) ${second_name}`;
  console.log(`Names are ${full_name}`);
}

let sayMyNameReturn = sayMyName();

console.log(`Function returned ${sayMyName}`);

function sayMyName() {
  let first_name = "Samson"; //statement 1
  console.log(`First Name ${first_name}`);// statement 2
  let second_name = "Johnna";//statement 3
  console.log(`Second Name ${second_name}`);//statement 4
  let full_name = `${first_name} ${second_name}`;
  console.log(`Names are ${full_name}`);
  return false;
}

let sayMyNameValue = sayMyName();
console.log(`Function returned ${sayMyNameValue}, type is ${typeof sayMyNameValue}`);
