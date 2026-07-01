function multiply(a, b) {
    return a * b;
}
let m = multiply;
console.log(m(35, 9.6));

function calcBMI(weight, height) {
    return weight / (height * height)
}
let bmi = calcBMI;
console.log(bmi(65, 1.85));

function calcNetSalary(grossSalary) {
    let SHIF = grossSalary * 0.0275;
    let HousingLevy = grossSalary * 0.015;
    let NSSF = grossSalary * 0.06;
    return grossSalary - (SHIF + NSSF + HousingLevy);
}
let net = calcNetSalary;
console.log(net(108500));
