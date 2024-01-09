# Primative data type vs Reference data type 
**JavaScript has 8 Datatypes**
- String
- Number
- Bigint
- Boolean
- Undefined
- Null
- Symbol (ES6 er new addition)
- **Object**
    - An object
    - An array
    - A date
    - A function

## Why it's diffrence ?
It because how JS store its value on memory. JS memory actually work in 2 diffrent way. **Stack** & **Heap**. So **stack** memory are use for **primitive** data. And  **heap** stratcher are use for **reference data**

### stack: 
| Stack Memory|
| :----:  |
| b       |
| a⤴     |

when you say 
```
let a = 100 ;
let b = a;
```
It work actually like **b** kea **a** er value ta daua hoi na copy daua hoi. Thats why if a change b will didn't get the value.

### heap: 
<table>
<tr><th>Stack memeory</th><th>Heap memory</th></tr>
<tr><td>

|seen 1|
|:---:|
|b↘|
|a➡|

</td><td>

|seen 2|
|:---:|
|````````````````````` |
|{ name: rakib, age: 24 }|
</td></tr> </table>

ai khanea **a** r **b** heap memory reference rakhea. 2i joni aki place a tader value rakhai akbar change korlea 2i joni aware hoi...karon tara 2i joni opolok dristitea takhai thakea heap memory dik.

```
let a = {
    name : "rakib",
    do : "do",
}
let b = a;
```


## JavaScript Primitives value : 
A primitive value is a value that has no **properties** or **methods**. That's mean if it is not an objective It will be primitive value. 3.14 is a primitive value. A primitive data type is data that has a primitive value.
**Immutable**(অপরিবর্তনীয়) ***Primitive values are immutable (they are hardcoded and cannot be changed).
if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.***

```
let a = 100;
let b = a;

a = 200;

console.log(a); // output --> 200
console.log(b); // output --> 100
```
simple i change **a** that's why it change. But i didn't edit **b** that's why it didn't change.

JavaScript defines **7** types of primitive data types:

- string
- number
- boolean
- null
- undefined
- symbol
- bigint

### Javascript Reference value : 

JavaScript defines **4** types of Reference data types:
- An object
- An array
- A date
- A function

```
let a = {
    name: "rakib",
    do: "code",
}
let b = a;

a.age = 24;

console.log(a); //output : { name: 'rakib', do: 'code', age: 24 }
console.log(b); //output : { name: 'rakib', do: 'code', age: 24 }
```
see if i change **a** then **b** also change. 

## Reference value behave like primitive value (spread operator) :

**spread** operator can make this. It didn't accpected if you change a then b will change itself. It's dengerous.

After using ***Spread Operator*** on **Object** and **Array**

***Objectiv spread operator***:
```
let a = {
    name: "rakib",
    do: "code",
};
let b = {...a};

a.age = 24;

console.log(a); //output --> { name: 'rakib', fo: 'code', age: 24 }
console.log(b); //output --> { name: 'rakib', fo: 'code'}
```
***Array spread operator***:

```
let d = [1,2,3,4,5];
let e = [...d];

d.push(10);

console.log(d); //output --> [1,2,3,4,5,10]
console.log(e); //output --> [1,2,3,4,5]
```