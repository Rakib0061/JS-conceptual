// import {scope} from './JS/scope.js'
// import {loop} from './JS/loop.js'
// import {closures} from './JS/closures.js'
// import { callback } from './JS/callback.js'
// import { prototype } from './JS/prototype.js'
// import { hoisting } from "./JS/hoisting.js"


//📛event delegation holo ami parrent element a akta click event lagabo sobarjonno alada lagabo na...
// er folea api thalea asa data amara jani na list koto boro tai indivisial lagano rosk...
// aita event delegation jar manea event takea delegat korea daua....
const ul = document.getElementById("ul");
ul.addEventListener("click", (e) => {
    // using matches for collect targeted element
    if (e.target.matches("li")) {
        e.target.style.backgroundColor = "red";
    }

    // 
    if (e.target.innerText === "Rabeya") {
        e.target.style.backgroundColor = "yellow";
    }
});

function addItems() {
  const btn = document.createElement("button");
    btn.innerText = "CLICK";
    
    btn.addEventListener("click", () => {
        const li = document.createElement("li");
        li.textContent = "ROny"
        ul.appendChild(li)
    });
  btn.style.border = "2px solid";
  ul.appendChild(btn);
}

addItems();



//📛event propagation holo event lisner gula kon oedera asbea ...
// jemon akhane 3 ta event handle asea...ami aktai click korlai parrent div ertau click hoia jaitcea... this is problem..
// toai order controll holo event propagation (propagation challanno ...procher).event propagetation ervetore 3 ta jinish porea

// 1.event bubling [child nechea thakea uporer dikea jabea aita holo bubling]
// 2.event capturing [child--> parrent] nechea thakea uporer deka jai jakea click kora hoicea takea show kora hoi then parrent...aikhane 3 paremeter asea
//      jaita dea ai control handlekora jai,{ capture : true} aita aholo 3rd paremeter.
// 3.event delegation

const parrent = document.getElementById("parrent");
const btno = document.getElementById("btno");
const btnt = document.getElementById("btnt");
const btn_parrent = document.getElementById("btn_parrent");

parrent.addEventListener("click", function(e) {
    // parrent
    console.log(this);
});
// ami aikhanea true korea daua tea child agea click hobea na... parrent agea hobea...
// its called event capturing or trickling

// ⛔ ami arrow function use kortcelam taie this undifind show kortcea....
// regular func a tikeasea

// ✅ tar manea this === e.currentTarget


btn_parrent.addEventListener("click", (e) => {
    // btn parrent
    console.log(e.currentTarget);
},{capture:true});

// ⛔ {capture : true} ami aita deya bubbling ta capture kortea parbo. ...
// aikahnea kintu order ta first a btn parrent pabo then btn 1 or 2 then pabea parrent.
// tar manea agea ai btn parent ta [parrent --> child] pabea tarporea aita ses hoia galea normal beheave hobea grand parrent sobar last a asbea

btnt.addEventListener("click", (e) => {
    // btn 2
    console.log(e.currentTarget);
});
btno.addEventListener("click", (e) => {
    // btn 1
    console.log(e.currentTarget);
});


