/*
Functions allow you to write reusable bits of code.
To use Dry(Do not report your self) by using code block

/{/code block/}/
syntax:
function <name:variable name convection> (<parameters>){
/code block/
}

//Big rule import rule.
-> a afunction executes only when called.
-> calling a function is telling the function to do its work.

*/

/*
Create a simple function that 
when you call it it alerts
you on the current time.
*/

function timeAlert() {
    const date = new Date();
    alert(`time stamp: ${date.toISOString("en-KE",{
        timeZone: "Africa/Nairobi",
    })}`);
}
/*
call a function use the function name then
()-> brackets
*/

timeAlert(); //calling a function

/*
Arae of a triangle 
0.5*l*w
*/
//base=undefined, height=undefined
function areaOfTriangle(base, height) {
    console.log(`base, height is ${base} its type ${typeof base}`);
    console.log(`height is ${height} its type ${typeof height}`);
    const area = 0.5 * base * height;
    console.log(
        `For triangle with base ${base} and height ${height} area is ${area}`,
    );
}

/*
*/

areaOfTriangle()

function areaOfTriangle(base, height) {
    console.log(`base, height is ${base} its type ${typeof base}`);
    console.log(`height is ${height} its type ${typeof height}`);
    const area = 0.5 * base * height;
    console.log(
        `For triangle with base ${base} and height ${height} area is ${area}`,
    );
}
areaOfTriangle(20)

function areaOfTriangle(base, height) {
    console.log(`base, height is ${base} its type ${typeof base}`);
    console.log(`height is ${height} its type ${typeof height}`);
    const area = 0.5 * base * height;
    console.log(
        `For triangle with base ${base} and height ${height} area is ${area}`,
    );
}
areaOfTriangle(20, 30)    

let base1 = 50
let height1 = 60
areaOfTriangle(base1, height1)

let base2 = "hello"
let height2 = true
areaOfTriangle(base2, height2)
