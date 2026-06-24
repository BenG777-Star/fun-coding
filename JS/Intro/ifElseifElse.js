/*

lets start with if:
 *it's special
 *you can use it on its own
*/

let age= prompt("Enter your age:")
alert(`You entered $(age)`)

//age27
//27>7:true
if(age>7){
    alert(`you are a baby`)
}
//27>13=true
if(age>13){
    alert(`you are a teen`)
}
//27>18=true
if(age>18){
    alert("you can legally drink and smoke")
}
//27>27=false
if(age>27){
    alert("yBest age for marriage")
}
//27>45=false
if(age>45){
    alert("Best age for retirement")
}
//27>50=false
if(age>50){
    alert("You are an Ancestor")
}