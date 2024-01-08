export function loop() {
    return ({
        first : "for of",
        second : "for in",
    })
}


// // loop over an object
// const obj = {
//     name: "rakib",
//     class: "Honor's",
//     District: "Notore",
// }

// for (const key in obj) {
//  console.log(key);  //its actually print key valu 
//  console.log(obj[key]);   //its print valu of a key
// }

// // loop over an array 
// const ary = ["r", "a", "k"];

// for (const iterat of ary) {
//     console.log(iterat); //r,a,k
// }

// array method
// 1. @@@@@ forEach @@@@@
const seen1 = [1, 2, 3, 4, 5];

seen1.forEach(vlu => console.log(vlu * 3)); //instant kaj kortcea parrent array ke change kortcea na
let seen1_update = seen1.forEach(vlu => {
    return vlu*5
})

console.log(seen1_update); //undifined show korea. karon forEach return keyword allow korea na.
// tailea buja galo amra valu uporoperation chalaytea parbo but store kore onnojaygai use kortea parbo na.


// 2. @@@@@ Map @@@@@
const seen2 = [1, 2, 3, 4, 5];
let seen2_Update = seen2.map(vlu => {
    return vlu / 2;
});

console.log(seen2_Update); // aotar ans kintu ascea...

// 3. @@@@@ filter @@@@@
const seen3 = [1, 2, 3, 4, 5,6];

let seen3_update = seen3.map(vlu => {
    if (vlu % 2 === 0 ) {
        return vlu;   
    }
});
console.log(seen3_update);

const seen4 = [10,11,12,13,14,15];
let seen4_update = seen4.filter(vlu => {
    if (vlu%2===0) {
        return vlu
    }
});
console.log(seen4_update);

// intersting facthocha i can use forEach also...but the issue is return
const seen5 = [10,11,12,13,14,15];
seen5.filter(vlu => {
    if (vlu%2===0) {
        // console.log(typeof vlu); //mojar besoy holo forEach array pathay na singlu value neya kaj korea
        console.log(vlu);
    }
});


// reduce method
const seen6 = [21, 22, 23, 24, 25, 26, 27];
const seen6_update = seen6.reduce((accu,vlu) =>  accu + vlu
)
console.log(seen6_update);

// every method 
const seen7 = [90, 89, 76, 6];
const seen7_update = seen7.every(vlu => vlu > 80);
console.log(seen7_update);

const seen8 = [90, 89, 76, 6];
const seen8_update = seen8.every(vlu => vlu > 5);
console.log(seen8_update);

// some method
const seen9 = [90, 89, 76, 6];
const seen9_update = seen9.some(vlu => vlu > 80);
console.log(seen9_update);

