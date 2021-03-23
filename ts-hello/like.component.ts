export class LikeComponent {
    //to make sure the values are read-only, change the name to "_" and private and get functions
    constructor(private _likesCount: number, private _isSelected: boolean){}

    onClick() {
        // if(this.isSelected) {
        //     this.likesCount--;
        // } else {
        //     this.likesCount++;
        // }
        // the code below is equavailent to the code above
        this._likesCount += (this._isSelected) ? 1: -1;
        this._isSelected = !this._isSelected;
    }

    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }
}