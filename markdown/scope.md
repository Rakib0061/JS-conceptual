# This topic for SCOPE (Lexical Scope).

In JS there have three diffrence scope 
1. ***Block Scope***
2. ***Functional Scope***
3. ***Global Scope***

- <ins><span style="color:yellow">BLock Scope :</span></ins> **LET** & **CONST** are Block Scope in JS. If i use this keyword for define the varibale then it will be block. I can't define this varibale after anywhere. But **VAR** is not a block scope. 
```
{
    let x = 1;
}
console.log(x)

# Output is --> "x is not defind" 

{
    var x = 1;
}
console.log(x)

# Output is --> "1" 
```
I got an beautiful example on **VAR**.
**VAR** is an function or global scope...
**LET** is an Block scope also **CONST** is an Block scope...
```
if(true){
    var seen1 = 101;
}
console.log("seen1");

# Output is --> "101" 


if(true){
    let seen2 = 101;
}
console.log("seen2");

# Output is --> "seen2 is not defind" 
```
as we know let is an block element thats why we didn't access seen2. We can only access if we log inside this curly braces.

- <ins><span style="color:yellow">Functional Scope :</span></ins> I can't get any information outside this function like
```
function hallo(){
    let x = 101;
}
hallo()
console.log(x)

# Output is --> "x is not defind" 
```

There have a beautiful behaviour i can access global variable inside function scope. like
```
let x = 101;

function hallo(){
    console.log(x);
}
hallo()

# Output is --> "101" 
```
But other programing language it didn't happen. I can't access global variable inside functional scope

- <ins><span style="color:yellow">Global Scope :</span></ins> Full (.js) file actually a global scope