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
/* Enum
enum Color {Red, Green, Blue};   //a group of related constants like colors; put them in container
//red has a value of 0 automatically, green=1, blue=2
//more robust
let backColor = Color.Blue;
*/
/* type assertions
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');
*/
/* Arrow Functio
let log  = function(message) {
    console.log(message);
}

let doLog = (message) => { console.log(message) }
//let doLog = (message) => console.log(message); when you have one line of code
*/
/* use interfaces to define the shape of the object
interface Point {
    x: number,
    y: number,
    draw: () => void;
}
let drawPoint = (point: Point) => {
    //...
}
let getDistance = (pointA: Point, pointB: Point) => {
    //...
}
drawPoint ({
    x: 1,
    y:2
})
*/
//use Class to follow the cohesion principle to have everything related to point in one class unit
//fields and methods go into Point class; much cleaner code compared to Interface
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + 'Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //actual function
    };
    return Point;
}());
//create an object and call the methods
var point = new Point(); //allocate it in memory by using new keyword
point.x = 1;
point.y = 2;
point.draw();
