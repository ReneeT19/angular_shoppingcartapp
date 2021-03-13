/* JavaScript

function log(message) {
    console.log(message);
}

var message = 'Hello World';

log(message);
*/
/* TS features - var
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('Finally:' + i);
}

doSomething();
*/
/* TS features - let
function doSomething() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('Finally:' + i);
}

doSomething();
*/
/*
let count = 5; //the type of count is "number"
count = 'a';

let variable; //the type of a is "any"
let a: number; //you can set the type of the variable
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a'] //not a good practice but a feature in ts
*/
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //a group of related constants like colors; put them in container
//red has a value of 0 automatically, green=1, blue=2 
//more robust
var backColor = Color.Blue;
