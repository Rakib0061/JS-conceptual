# The tram of I will call you back (callback)
We use callback func for Asynchronous JS. Because JS always invoke a function up to down. like...
```
function seen1 (){
    console.log("print first");
}

function seen1 (){
    console.log("print second");
}

see1()
see2()

#Output seen1 --> print first;
#Output seen1 --> print second;

see2()
see1()

#Output seen2 --> print second;
#Output seen1 --> print first;
```
This means it mentaines sequence. We we want to control on sequence...then we need **callback functon**.

```
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

result(pass,fail);

    
#Output --> You result is Ok. you pass
```

In there we can controll which func i need to call as a paremeter. That's why it called Callback.