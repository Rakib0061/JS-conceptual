export function closures() {
    return `the beautiful concept of JS closures. Thats why JS called as garbage collected language`;
}

let num = 100;
function increaser(){
    return ++num;
}
console.log(increaser());
num = 90; //bahereathake valu manupulate kora jachea
console.log(increaser());

//soluation

function increaser2() {
    let num1 = 100; //akhon ami num1 value ke bahera access kortea parbo na
    return ++num1; //tar manea new problem arrive.
}

console.log(increaser2());// same 101 value astcea
console.log(increaser2());// same 101 value astcea

// it solve closuer by function inside a fucntion

function increaser3() {
    let num2 = 200; 
    return function() {
        return ++num2; //first time it borrow this var from parent func
                       // but for next time it will create closure and num2 will memory this value.
    }
}

let inside = increaser3();
console.dir(inside); 
// ai kahne akta besoy khayel korar moto ami inside dir korce oitatea 201 show kortcea. But i call this func next line. actually aita hochea var memory jai jaygai save hoia asea amra func ta call korea concole print daktea daktea memory oi particular place a change hoia gasea. taie amon ta show kore
console.log(inside());
console.dir(inside);
console.log(inside());

//i got an issue in there before i call inside() fucntion console.dir show in scope property num2 updated
