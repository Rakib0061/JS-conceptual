# JS top notch Concept (PROTOTYPE)
Javascript is Based on prototype. This concept isn't new. It was form in an inception.Prototypes are the mechanism by which JavaScript objects inherit features from one another. Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype. (**manea ami jea method ba property chaitcee oita oi func ba obj na pailea or parent object thakea neya show korbea**)

What is solved prototype?
---
Sometimes we create bluprint object like **class**. On the base of this **constructors** we create our real time object.
```
function seen1(nm, ag, wrk) {
    //property
    let person = {
        name : nm,
        age : ag,
        work : wrk,
    }
    //method (used immediate function for not calling)
    person.code = (() => {
        return `Love to code`;
    })()
    person.footbal = (() => {
        return `Love to footbal`;
    })()
    person.cricket = (() => {
        return `Love to cricket`;
    })()

    return person;
}

// real time object making
let rakib = seen1("rakibul Islam",24,"code");
let sakib = seen1("sakibul Islam",36,"cricket");
let messi = seen1("Leonial messi", 43, "footbal");

// then show the real obj
console.log(rakib);
// console.log(sakib);

# output --> {
  name: 'sakibul Islam',
  age: 36,
  work: 'cricket',
  code: 'Love to code',
  footbal: 'Love to footbal',
  cricket: 'Love to cricket'
}
```
we can easyly see **rakib** work on code. he didn't need **footbal** func or **cricket** func. But it print all that stuff. we can control for calling particular function like ```footbal()``` but its store in my memory space.

We know JS is garbage collected language. So we can use prototype for creating object like ```let sakib = seen1("sakibul Islam",36,"cricket");``` but it didn't take all of method. (notun object vetore neya jaitcea na amar Object size choto hochea) like...

## <span style="color:yellow">link one fucn & obj [Object.create()]</span> 
```
seen2.prototype = {
  code: () => {
    return `Love to code`;
  },
  footbal: () => {
    return `Love to footbal`;
  },
  cricket: () => {
    return `Love to cricket`;
  },
};

function seen2(nm, ag, wrk) {
  let person = Object.create(seen2.prototype);
  person.name = nm;
  person.age = ag;
  person.work = wrk;
  return person;
}

const raki = seen2(`nakibul Islma`, 24,`code`);
console.log(raki());

#output --> Love to code;
```
In that way we can get other variable value on my function. and prototype helps me for agin not declirianing any vriable. prototype is everywhere in js. For prototype we can get any value on its parent. **That's how we can call array.map(),forEatch() OR .toString(), charAt() method. cause those method she got on his parent property.** In JS there have an build in stratcher. lets see...**intruduceing ***new*** keyword**

```
Seen2.prototype = {
  code: () => {
    return `Love to code`;
  },
  footbal: () => {
    return `Love to footbal`;
  },
  cricket: () => {
    return `Love to cricket`;
  },
};

function Seen2(nm, ag, wrk) {
  //❌let person = Object.create(seen2.prototype); 

  ✅this.name = nm;
  ✅this.age = ag;
  ✅this.work = wrk;

  //❌return person;
}

//❌const raki = seen2(`nakibul Islma`, 24,`code`);
✅const raki = new Seen2(`nakibul Islma`, 24,`code`); 
💥 convension is constructor function should capital letter. 
console.log(raki); 
#Output --> {
  name: 'sakibul Islam',
  age: 36,
  work: 'cricket',
}
```
What is custom method (prototype chain) :
---
Sometimes we have to make custom property for all project. We can use prototype chain for custom method or property like...
```
Object.prototype.salary =
    (nm) => `${nm} what should the salary?`;

console.log(raki.salary("nakib"));
```
In there we can set an root **Object** custom metod like salary. then we can access in everywhere. We see in raki there have no salary method. But salary method have on main **Object**. That's how prototype chain work.

Prototype Inherentance <span style="color:yellow">link two func [call(), apply(), bind()]</span>: 
---
Agea amra notun kono variable na neyai prototype er vetore kcu instance raktea partam. **Agea amra 1 ta func and akta object ke combind korce** In case amader jodi **2ita function kea combind kora lagea**. the seeniro will be  given below...

```
const Which = function () {
  this.name = "rakib";
  this.age = 24;
  this.mark = 'on forhead';
}

const Jobholder = function (ins, slry, plc) {
  Which.call(this);

  this.institute = ins;
  this.salary = slry;
  this.place = plc;
};

let rima = new Jobholder(`dhaka college`, `10,000`,`mirpur DHOS`);

console.log(rima.name);
```
two function are now synchronous. It's happen for **call, apply, bind** method.