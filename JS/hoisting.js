export function hoisting(){
    return `Hosting is a concept of JS. It's seems variable decliration are lifting on top`;
}

// seen a kcu push kore nai tai undifind dakhacea
let seen_a;
var seen_ab;
console.log(seen_a);
console.log(seen_ab);

// seen b var dia jaitea korce oita undifind show korer let er ta kore na
// ✅ karon var lifiting kore necher linea undifind bosai dai. but let oita kortea parea na
console.log(seen_bc);
// console.log(seen_b);
let seen_b;
var seen_bc;

// seen cd var dia jaitea korce oitar memory undifind vlu change hoia akhon 100, r c reference error
// ✅ karon let lifiting kore necher linea undifind bosai dai na. tai or jonno lifting er por kno space make kora hoi na memory tea.
// taie seen_c jhokon memory tea jaitcea daktcea or namea kono spacecreate hoi nai taie ai error.
seen_cd = 100;
// seen_c = 200;
console.log(seen_cd);
// console.log(seen_c); // 

let seen_c;
var seen_cd;

// const aitar jonno syntax error dbea karon cosnt aivabea liktaie debea na
seen_d = 100;;
console.log(seen_d);
// const seen_d;
