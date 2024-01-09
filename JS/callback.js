export function callback() {
    return `I will call you back`;
}

const num = 33;

function result(callback1,callback2) {
    if (num >= 33) {
        callback1();
    } else {
        callback2();
    }
}

function pass() {
    console.log(`You result is Ok. you pass`);
}

function fail() {
    console.log(`You result is not Ok. you fail`);
}

result(pass, fail);

// Call back er valo akta udharon holo konon course e enrolment kora
// 1. payment
// 2. set log n pass
// 3. progress
// 4. certificate

const pay = true;
const rslt = 50;

function payment(callback) {
    setTimeout(() => {
        if (pay) {
            console.log(`payment successfully`);
            callback();
        } else {
            console.log(`not pay`);
        }
    }, 2000);
}

function login(callback) {
    setTimeout(() => {
        console.log(`you are regester now`);
        callback();
    }, 1000);
}

function progress(callback) {
    setTimeout(() => {
        if (rslt <= 33) {
            console.log(`you are fail`);
            // console.log(callback());
            // look i mute this call. that's why it will not excuate this func. But you will see i call this certificate func down bellow. But didn't excuate. That's why it called callback.. You have controll when you invoke it.
        } else if (rslt <= 50) {
            console.log(`good enough more pratice`);
            // console.log(callback());
        } else if (rslt <= 80){
            console.log(`You got talent pool access`);
            // console.log(callback());
        }
    }, 3000);
}

function certificate() {
    if (rslt <= 33) {
        return `NO certificate available`
    
    } else if (rslt >= 33) {
        return `good more pratice, take certificate`;
    
    }
}

payment(() =>
    login(
        () => 
        progress(
            () => 
                certificate() //ai nested calling e holo callback
        )
    )
);
