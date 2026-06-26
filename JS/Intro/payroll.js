let basicSalary = 85000;
let houseAllowance = 15000;
let healthAllowance = 5000;
let transportAllowance = 3500;
let grossSalary = basicSalary + healthAllowance + houseAllowance + transportAllowance;
console.log(grossSalary);

let shif = grossSalary*0.0275
console.log(shif);

let housingLevy = grossSalary*0.015
console.log(housingLevy);

let NSSF = 0;

if(grossSalary <= 9000){NSSF = grossSalary * 0.06
}else if(grossSalary > 9000 && grossSalary <= 108000){NSSF =
(9000 * 0.06) + ((grossSalary - 9000) * 0.06)}
else{NSSF =6480}
console.log(NSSF)

let paye = 0;

if(grossSalary <= 24000){paye = grossSalary * 0.1}
else if(grossSalary > 24000 && grossSalary <= 32333){paye = 
    2400 + ((grossSalary - 24000) * 0.25)
}
else{paye = 2400 + 2083.25 + ((grossSalary - 32333) * 0.30)}
paye = paye - 2400;
console.log(paye);

let netSalary = grossSalary - (shif + housingLevy + NSSF + paye)
console.log(netSalary);