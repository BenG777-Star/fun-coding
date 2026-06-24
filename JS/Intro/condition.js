/*
conditions ->
control the flow of the code by making a decision

condition operators->
if, else if and else

    syntax:
    if you want to use if 
    if(<condition goes>){}
    Golden Rule-> if the condition is truthy
    then it will execute code in/{}/

if the condition is falsey then
it will not execute the code in /{}/ 

-> examples
*/
/*
senarial 1:
 1.declare a variable<of your choice>assign a truthy value
  create an if statement and put the variable
  inside the if statement. Inside the if
  console.log("senarial 2 it run")
senarial 3:
 1.create an if statement inside the if statement condition
 part.have true.
 inside the block({}) console.log("senarial 3 it run")
senarial 4:
 1.create an if statement inside the if statement condition
 part.have false.
 inside the block({}) console.log("senarial 4 it run")
senarial 5:
 1.create an if statement inside the if statement condition
 part.10>20
 inside the block({}) console.log("senarial 5 it run")
 senarial 6:
  1.create an if statement inside the if statement condition
  part. have 20>10.
  inside the block({}) console.log("senarial 6 it run")
 */

 const myChoice="My dress my choice"//23

 if (myChoice){
    console.log("Senarial 1 it run")
 }

 if (true){
    console.log("senarial 3 it run")
 }

 if (false){
    console.log("senarial 4 it run")
 }

 if (10>20){
    console.log("senarial 5 it run")
 }

 if (20>10){
    console.log("senarial 6 it run")
 }

