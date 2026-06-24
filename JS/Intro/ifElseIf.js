/*
if and else if -> chain
-> we exit if and else if when we reach the first truth
*/

let age= prompt("Enter your age:");
//
console.log(`age is ${age} typeof ${typeof age}`);
alert(`you entered ${age}`);
//age27
//27>7:true->
//
if(age>7){
    alert(`you are a baby`);
}else if (age < 13){
    alert(`you are a teen`);
}else if(age < 18){
    alert("you can legally drink and smoke");
}else if(age < 27){
    alert("Best age for marriage");
}else if(age > 45){
    alert("Best age for retirement");
}else if(age > 50){
    alert("You are an Ancestor");
}