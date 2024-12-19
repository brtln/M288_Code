/*
Tasks:
a) Create a 'function expression' which converts Fahrenheit to Celsius.
The conversion formula is: celsius = (Fahrenheit - 32) * 5 : 9
b) Test your function at least twice with different input values.
 */
//function which converts Fahrenheit to Celsius
let F2C1 = function (fahrenheit){
    return (fahrenheit - 32) * 5/9;
}
//function call and output on the console
//i.e. for 32°F
let fahrenheit=32;
console.log(`${fahrenheit}°F sind ${F2C1(fahrenheit)}°C`);
//i.e. for 68°F
fahrenheit=68;
console.log(`${fahrenheit}°F sind ${F2C1(fahrenheit)}°C`);

for(let fahrenheit=0;fahrenheit<120;fahrenheit++){
    console.log(`${fahrenheit}°F sind ${F2C1(fahrenheit).toFixed(1)}°C`);
}
