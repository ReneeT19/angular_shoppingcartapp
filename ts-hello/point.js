"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
//in real life, you don't want to have all classes in the main.ts
//without "export" this class is only accessible in point.ts
//now this class is a module and you need to import from main.ts
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    return Point;
}());
exports.Point = Point;
