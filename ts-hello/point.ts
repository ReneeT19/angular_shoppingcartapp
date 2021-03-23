//in real life, you don't want to have all classes in the main.ts
//without "export" this class is only accessible in point.ts
//now this class is a module and you need to import from main.ts
export class Point {
    constructor(private _x?: number, private _y?: number) {
    }
    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
}