/*
Tasks:
a) Create a 'function declaration' which adds to numbers and output its sum.
b) Test your function at least twice with different input values.
 */
//function which adds two numbers
function add(a,b){
    return a + b;
}

let div = (a,b) => {
    return a/b;
}
//function call and output on the console
//i.e. 5+6
let a=60;
let b=6;
console.log(`${a}+${b}=${add(a,b)}`);
console.log(`${a}/${b}=${div(a,b)}`);

//i.e. a + b
a=53434;
b=343434;
console.log(`${a}+${b}=${add(a,b)}`);
console.log(`${a}/${b}=${div(a,b)}`);

