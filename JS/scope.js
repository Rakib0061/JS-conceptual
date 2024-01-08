export function scope() {
    return ({
        tag: `<h1 class:"text-4xl text-black-600">Lexical Scope</h1>`,
        first : "How many scope in JS?",
        second : "How to Deal with Scope",
    });   
}

    
// Global Scope + Functional Scope
let x = 101; // I can access anywhere that x

console.log(`Global x : ${x}`);

function sceen1() {
    console.log(`function sceen1 x : ${x}`);
}

sceen1();
console.log(`Global x after sceen1 : ${x}`);


function sceen2() {
    x = "100tk";
    console.log(`function sceen2 x : ${x}`);
    // tar manea ke... Ooo change hoicea abar Parent x er valu manupulate korea dcea direact...
}

sceen2();
console.log(`Global x after sceen2 : ${x}`);

function sceen3() {
    let x = "500tk";
    console.log(`function sceen3 x : ${x}`);
    // But aita kintu valu change korcea but parrent er valu manupulate kore nai safe asea...
}

sceen3();
console.log(`Global x after sceen3 : ${x}`);


// Block Scope 
{
    let num1 = 101;
}

// console.log(num1); // num1 is notdifind

{
    var num2 = 101;
}

console.log(num2); // 101

// The reason is var have no block scope but let and const have.
