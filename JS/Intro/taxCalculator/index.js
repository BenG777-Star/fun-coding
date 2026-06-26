/*
prompt("")

checking if is a number
1. is NaN
2. Number->
3. +<>

*/
//stay here until he has entered the correct gross
let grossMonthlySalary = null;
while(true){
    let gross=prompt("Enter your gross salary")
    if(!isNaN(gross)){
        gross = Number(gross);
        if(gross>0){
            grossMonthlySalary = gross;
            break;
        }
    }
    alert(`Invalid amount entered.
        Ensure you enter a number greater than 0
        `);
}
console.log(`Gross salary is ${grossMonthlySalary} its type ${typeof grossMonthlySalary}`,
);
//->here

