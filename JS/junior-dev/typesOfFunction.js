/*
1.Named function:
2. Anonymous function:
 -> a function can be assigned to variable.
 -> a variable can reference a function.

*/
function areaCircle(r){
    return 3.142 * r * r; //area of a function
} //named function
//
let age = 23;

let samsAge = age; //age23

let ac = areaCircle;
console.log(ac);
console.log(`Area of circle is ${ac(5)}, type ${typeof ac}` );

/*
what is the value of ac and what is it.
-> use typeof
*/


let aS = function(s){
    return s * s;
}
let result =aS(5);
console.log(result);

console.log(areaSquare(5));