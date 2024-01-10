export function prototype() {
  return `prototype is a property for getting value of her parrent`;
}

// an constractor function which is bluprint.
function seen1(nm, ag, wrk) {
  //property
  let person = {
    name: nm,
    age: ag,
    work: wrk,
  };
  //method
  person.code = (() => {
    return `Love to code`;
  })();
  person.footbal = (() => {
    return `Love to footbal`;
  })();
  person.cricket = (() => {
    return `Love to cricket`;
  })();

  return person;
}

// real time object making
let rakib = seen1("rakibul Islam", 24, "code");
let sakib = seen1("sakibul Islam", 36, "cricket");

// then show the real obj
console.log(sakib);
// console.log(rakib);

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
  person.eork = wrk;
  return person;
}

const raki = seen2(`nakibul Islma`, 24,`code`);

// prototype chain:
Object.prototype.salary = (nm) => `${nm} what should the salary?`;

console.log(raki.salary("nakib"));

// prototype inheritence
const Which = function (n) {
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