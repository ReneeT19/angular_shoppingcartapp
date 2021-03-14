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
/* class Point {
    x: number;
    y: number;

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(another: Point) {
        //actual function
    }
}
//create an object and call the methods here
//an object is an instance of a class
let point = new Point();  //allocate it in memory by using new keyword
//give it values otherwise it will say x and y undefined
point.x=1;
point.y=2;
point.draw();
*/

//the code above is verbose, we can use constructors to make it cleaner
// every class can have a constructor, a method called when we create an instance of that class
/* class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}
let point = new Point(1,2);
point.draw();
*/

//if we don't know the values, we make these parameters optional
//this way new Point doesn't have to have initial values
//constructor(x?: number, y?: number) {
    //...
//}
//let point = new Point();
//if you don't want to change the x y values after they are initialized
//apply access modifiers - public, private, protected
//prefix x to "private x"

/* cleaner code by using access modifers in constructor parameters
class Point {
    constructor(private _x?: number, private _y?: number) {
    }
    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
    getX() {
        return this.x;
    }

    //you can use the property below instead of calling methods
    get x() {
        return this._x;
    }
    setX(value) {
        if(value < 0) 
            throw new Error('value can't be less than 0.');
    }
    set x(value) {
        if(value < 0) 
            throw new Error('value can't be less than 0.');

        this._x = value;
    }
}
let point = new Point(1,2);
//to get x value point.x won't work, we need a method in the Point class getX() to display to the user
let x = point.getX();
let x = point.x;
point.setX(10); //when you want the use to set the value at certain condition
point.x = 10;
point.draw();
// use "_" in the field so it won't conflict with the getter and setter name
*/

/* Module import */
import {Point} from './point';

let point = new Point(5,7);
point.draw();