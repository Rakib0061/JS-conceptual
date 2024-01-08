# This topic for Loop.

In JS we can loop over an  iterabal object. like real time **Object** or an special type object like **Array**.

1. ***For of loop***
2. ***For in loop***
3. ***Array method loop***

- <ins><span style="color:yellow">For in Loop : </ins></span>  For in Loop is used for loop over an Object. In this valu we get and key of an object.
```
const obj = {
    name: "Rakib",
    section: "Rokeya",
    district: "Natore",
};

for (const key in obj){
    1.console.log(key)
    2.console.log (obj[key])

    #Output 1 --> name,section,district;

    #Output 2 --> Rakib,Rokeya,Natore;
}
```

- <ins><span style="color:yellow">For of Loop : </ins></span> Before ES6 Array are ittreate using For of loop. ***As for of loop have an letter "O" (of) we can say its a tools of special type of an object like array, map***

```
const ary = ["rakib","panna","nancy",]

for (const iterator of ary) {
    console.log(iterator);

    #Output --> rakib,panna,nancy;
}
```

- <ins><span style="color:yellow">Array method : </ins></span> In an Array it's have some special method for diffrenc purose...most common are given below
    - array.forEach()
    - array.map()
    - array.filter()
    - array.reduce()
    - array.every()
    - array.some()
- <ins><span style="color:orange">array.forEach() : </ins></span> ai function notun variable a rakar jonno return allow kore na. tai push ba concatation method use kortea hoi. ***Big problem is doesn't allow return key word***. return lakha taklea **undifined** show korea. Mojar akta fact holo forEach er value typeof jodi dakhi tailea dakbo o number ba string. But jara kcu return kore like map ba filter tara kintu typeof object orthat array return korea.  More on... **<ins>Distinguish between forEach and map method</ins>** 

- <ins><span style="color:orange">array.map() : </ins></span> forEach er update version.That's mean map method **return allow korea**. Onno jaygay value store korea raka jay. More on... **<ins>Distinguish between forEach and map method</ins>**.map aro base kicu semabodhota asea. Map o majea majea **undifined** show korea... jokhon root array length change kore notun valu ana lagea thokon fakajayga gula Undifind show kore More On...**<ins>Distinguish between map and filter method</ins>** 

- <ins><span style="color:orange">array.filter() : </ins></span> filter method holo jhokon array length neya kaj kora lagea thokon use kortea hoi..**Intersting akta fact holo aita forEach deyau kora jau but bad luck holo return option nai rkee** jemon akta array thake even or odd or prime number ber korea ana. tailea to new variable a previous array length match korbea na. Er karonea filter use kora hoi.

- <ins><span style="color:orange">array.reduce() : </ins></span> reduce method full array sum ber kortea use kora hoi. just akta parameter ***accumulator*** use kortea hoi tailai hoia jai.like...
```
const seen [1,2,3,4,5];
const seen_update = seen.reduce((accu,vlu) => accu + vlu)

console.log(seen_update);
#Output --> 15
```

- <ins><span style="color:orange">array.every() : </ins></span> every method kind of search operation chalay. akta array tea searching item asea kena tar jonno every use kora hoi.
```
const seen = [90, 89, 76, 6];
const seen_update = seen7.every(vlu => vlu > 80);

console.log(seen_update);
#Output --> false
```
**every method kaj korea jodi array sokol element 80 boro hoito taile true hoit. Mane every jonno array sokol element er condition true korlay every true return kore** sob element true korlea main output true asbea.

```
const seen = [90, 89, 76, 6];
const seen_update = seen.every(vlu => vlu > 5);

console.log(seen_update);
#Output --> true
```
karon akhon sob element 5 thake boro.<ins style="color:#fff">all element true then output will be true. one element false output will be false</ins>

<ins><span style="color:orange">array.some() : </ins><span> every method er beporit. Akta true hoilea itteration thake ber hoia asea and true return korea. r jodi sesporjonto true na pai tailea false e return korea.

```
const seen8 = [90, 89, 76, 6];
const seen8_update = seen8.some(vlu => vlu > 80);

console.log(seen8_update);
#Output --> true;
```

## <ins><span style="color:#fff"> Distinguish between forEach and map method </ins></span>

forEatch r map 2ijone array khub advance method jara array upor operation chalay but parrent array ka kono **distroy korea na**.

2i method ke array theke itterate korea korea **valu ta show kore.**

value neya amra **extra operation chalaytea pare** jemon value sathea * 2 ba extra word jemon **concatination** + "jabea"

```
const string = ["rakib","nancy","panna"];
string.forEach(vlu =>{
    console.log(vlu + "jabea")
})
string.map(vlu =>{
    console.log(vlu + "jabea")
})
```
2ita function aki output dehea

**But the problem is** sometime this output you have to use on another place. tokon amake just **console.log(vlu + "jabea")** lekha jabea na. amakea return keyword use kortea hobea. like...
```
let new_string = string.map(vlu =>{
    return vlu + "jabea"
});

console.log(new_string)
```
akhon ami ai variable taa jkhono place a use kotea parbo...

Tokone map VS forEach er distinguish dakha jai...karon forEach return allow korea na...But map do.
**<span style="color:#fff">ak kothai jodi bole array upor operation chalanor por  jodi amar value gula onno jaygay store kora lagea then map use korbo...karon map return keyword allow korea...</span>**

## <ins><span style="color:#fff"> Distinguish between map and filter method </ins></span>

Map aroo beskicu semabodhota asea... Map o **Undifind** show kore. Jhokon or length neya kono operation chalano hoi. Ai dhoren array thakea just even number gulo ber korea anbo. tarmane amar fularray proyojon nai. thokonn map performance bajea hoi. like...

```
const seen = [1,2,3,4,5,6];
let seen_update = seen.map(vlu => {
    if(vlu%2 === 0){
        return vlu;
    }
})

#Output --> [ undefined, 2, undefined, 4, undefined, 6 ]
```
aitai map er durbolata. Jodi length neya kono operation na kora lagea then Map tik asea. r ai somoscha somadhan korcea Filter. **Intersting fact hocha map na parlau ***<ins>forEach</ins>*** kintu undefind dakhai na jodi length neya kono operation chalano hoi**
```
const seen = [1,2,3,4,5];
let seen_update = seen.filter(vlu =>{
    if(vlu%2 ===0){
        return vlu
    }
})

console.log(seen_update);
```

<ins>forEach</ins> er kheatrea
```
const seen = [1,2,3,4,5];
seen.forEach(vlu =>{
    if(vlu%2 ===0){
        console.log(seen);
    }
})

#Output --> 2,4
```