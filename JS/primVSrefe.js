export function primVSref() {
    return `A primitive value is a value that has no properties or methods`;
}

//  🛑@@@@@@@@@ primitive value @@@@@@@@@ 
let a = 100;
let b = a;

a = 200;

console.log(a); // output : 200
console.log(b); // output : 100
//a ke change korce taie change hoicea but b kea kore nai tai hoi nai.

//  🛑@@@@@@@@@ reference value @@@@@@@@@ 
let person = {
    name: "rakib",
    do: "code",
}

let man = person;

person.age = 24;

console.log(person); //output : { name: 'rakib', do: 'code', age: 24 }
console.log(man); //output : { name: 'rakib', do: 'code', age: 24 }
// 2itataye change hoia gasea but ami person a push korcelam.


//  🛑##### using spread operator you can behave like primitive value ##### 
let x = [1,2,3,4,5];
let y = x;

x.push(9);

console.log(x); //output --> [1,2,3,4,5,9]
console.log(y); //output --> [1,2,3,4,5,9]

let d = [1,2,3,4,5];
let e = [...d];

d.push(10);

console.log(d); //output --> [1,2,3,4,5,10]
console.log(e); //output --> [1,2,3,4,5]

let obj = {
    name: "rakib",
    fo: "code",
};
let newObj = {...obj};

obj.age = 24;

console.log(obj); //output --> { name: 'rakib', fo: 'code', age: 24 }
console.log(newObj); //output --> { name: 'rakib', fo: 'code' }