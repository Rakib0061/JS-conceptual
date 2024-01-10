# The Concept of Closures.
Closures is a beautiful concept of JS. For closures JS called as a **garbage callected language**. Beacuse for closures js can intelengently handle a varible state. If i use those variable then she remember either not.
```
let num = 100;
function increaser(){
    return ++num;
}

consloe.log(increaser());
consloe.log(increaser());
consloe.log(increaser());
# Output --> 101
# Output --> 102
# Output --> 103
```
taht's increment my number. I problem is arrive that I can manupulate that num variable. like

```
let num = 100;
function increaser(){
    return ++num;
}

consloe.log(increaser());
num = 90

consloe.log(increaser());

# Output --> 101
# Output --> 91
```
That's mean i need to set variable in function like...


```
function increaser(){
    let num = 100;
    return ++num;
}

consloe.log(increaser());
consloe.log(increaser());
consloe.log(increaser());

# Output --> 101
# Output --> 101
# Output --> 101
```
we solve a problem. But new problem arrive. It's doesn't increment.
So problem is 2 now
1. <span style="color:red">parrent function have to invoke only one time</span>

2. <span style="color:red">variable have to state management</span>

In that situation closures help. Closures introduce function inside another function. Also It's variable can state management
```
function increaser(){
    let num = 100;
    return function(){
        return ++num;
    }
}

let updated = increaser();
consloe.log(updated());
consloe.log(updated());
consloe.log(updated());

#Output --> 101
#Output --> 102
#Output --> 103
```
Inside that function It is an anonymous function its return by **increaser()** function. then i store what inside it on **update** variable. then call it.

If i dir this function. I mean not call the function only pasing reference then i see 

```
console.dir(update)

#output --> ƒ anonymous()
                length: 0
                name: ""
                prototype: {constructor: ƒ}arguments: (...)
                caller: (...)
                [[FunctionLocation]]: closures.js:27
                [[Prototype]]: ƒ ()
                [[Scopes]]: Scopes[3]
                    0: Closure (increaser) {num: 202}
                    1: Module {num: 91, closures: ƒ}
                    2: Global {
                            window:  Window,
                            self:Window,
                            document:  document,
                            name: '',
                            location: Location, …
                        }
```
Inside this scops i see closure for the first time. (jodi ami uporer function ta dakhi vetorer function a ami parrent function a variable use korce...jodi na kortam tailea kintu ai clouser ta create hoito na...**tar mane jai variable amar dorkar nai JS oita nejai remove kore dtcea ai karonai JS k garbage collected language bolea**)

```
function increaser3() {
    let num2 = 200;
    return function() {
        return ++num2; 
    }
}

let inside = increaser3();
console.log(inside());
console.log(inside());

#Output --> 201
#Output --> 202
```
If we are looking closely then we see inside anonymouse function we use num2 variable. But It work like,first calling inner function borrow this variable from parent fucntion.. But for the next time inner function will create clouser for stored variable. that's why num2 = 200; it not working for all onvoking function

```
function increaser3() {
    let num2 = 200;
    return function() {
        return ++num2; 
    }
}

let inside = increaser3();
console.dir(inside);
console.log(inside()); 
```
Interesting fact i got. function is an special type of object. and we know object are take **HEAP** data stratcher. Thats why this an refrence value. So we ```indide()``` call it will chenge the ```console.dir(inside);``` value of clouser. Beacause we know refrence value can manupulate. But **primitive value** not

**ai kahne akta besoy khayel korar moto ami inside dir korce oitatea closure 201 show kortcea. But i call this func next line. actually aita hochea variable ta memory jai jaygai save hoia asea amra func ta call korea concole print daktea daktea memory oi particular place a change hoia gasea. taie amon ta show kore**

# I got an issue on implementing Incement Opertor
**Increment Opertor**</span></ins> Like there have 2 diffrent way 
  - pre Increment ( i++ )
  - post Increment ( ++i )

```
let num = 100;
num++;
console.log(num)

# Output --> 101;
```
that's fine. But the issue when i use function for return. like
```
let num = 100;
function increment(){
    return num++;
}
console.log(increment())

# Output --> 100;
```
In there it should be 101 but not. if you use **++num** then the output will 101.

the fact is num++ ...let's explain num++ mean by
```num = num + 1``` (aitar manea hocha jogfol korar por variable store hobea). On the other hand ++num mean ```1 + num = num``` (agea jog hochea then store hochea). thats why when you use **return num++** thats mean return already sentback before itstored. you can use pre increment before additional then store and sent via return.