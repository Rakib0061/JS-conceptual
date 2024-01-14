# Moving declarations to the top (Hoisting)

Hoisting is JavaScript's default behavior of moving declarations to the top. We can declear our variable in diffrent ways. **JS only hoist decleration not assignment or initionalation. JS function difination, variable, class difination ke hoist korea** 

## <span style="color:yellow">var :</span>
1️⃣ decelar and assaign
```
var a = 100
console.log(a) //output --> 100
```

2️⃣variable can be declared after it has been used.

```
var a;
 a = 100;
 concole.lo(a) // output --> 100
```

3️⃣ variable can be used before it has been declared.

```
a = 100
console.log(a); // output --> 100
var a;
```

4️⃣ decliar and initilazition after it used 
aikhanea amon ta hour karon holo **JS variable decliration k hoisting kore but initilization kea korea na** so var a thike hoist hoia porea utcea but a = 100 onechai porea asea. taiea first a undifind daua takar karonea undifind e show korbea.

```
console.log(a); // output --> Undifind
vara = 100
```
In that couse of behavior, we can actually see variable before or after variable decleration. Because JS actually liftinng them up.**when The JS file browser excuate, he just lifting them all decleration like (var a; It will goes to up)** tailea amra bujlam jai jaygai print hoicea```console.log()/DOM``` **oi jaigar upore variable assaign hoilaie**....delecttion ta jayi khanai korukna kno....the cosole result will show that value.

## <span style="color:yellow">let :</span>
It become confusing after introducong **let** and **const** keyword come; if i try  that think with let 
```
a = 100;
console.log(a); //output --> "
Cannot access 'a' before initialization"

let a;
```
aita kno ghotea aitar akta karon asea **var** r **let/const** a. nechea aitar karon dhakano holo. lifting process.

## <span style="color:white"> Distinguish between "Let/conts" VS "var lifting </span>

ami jhokon ai code ta rn kortce keghotea...let's look.

<span style="color:yellow">var</span>
---
```
a = 100;
console.log(a)
var a;
```
JS asolea ai var takea uporea neya jai then tar jonno memory tea akta space create kore "undifind" dia...
```
// ❎var a; 
// ❎a = undifind; 

✅a = 100;
✅console.log(a) //output --> 100;
✅var a;
```
fist a var lifting hoicea upore then or jonno memory tea akta space tori korcea "Undifind dia"... like **JS** varsity Bus a uitha or frind er jonno pasher akta sit ore nejar bag (***undifind***) dia dhorea rakcea
porea line a or frind a cholea ascea ```a = 100``` to ***undifind*** shorea jaia ```a = 100``` bosea gasea..

```
// ❎var a; 
// ❎a = undifind; 

✅console.log(a) //output --> undefined;
✅a = 100;
✅var a;
```
ai khanea seen ta dhaken ai khane onno frind ra aisha ```console.log(a)``` **a** kea kujtcea tokon kintu a er jaigaye JS er eree bag **undifind** pabea. karon ```console.log(a)``` asar somoy kintu a tokono variable assign hoicelona. 

<span style="color:yellow">let</span>
---
JS a let  const uvoyeaie lifting behaveior ta kore...karon aita JS er behavior. to let const kno tailea error dtcea..
```
a = 100;
console.log(a) //output --> "Cannot access 'a' before initialization ";
let a;
```
**aikhane var r let er vetore thofat ta holo let thike lifting korcea but o or frind ***a*** er jonno kono bag (undifind) dia jayga rakhe nai** mane memory tea kono space create kore nai..jar karone ```a = 100``` aie **a** jhokon memory tea jaitcea tokon dhekea tar name kono space nai taiee reference error dakhcha...
