class Bone {
    constructor(left,right){
        this.left = left;
        this.right = right;
    }

    flip() {
        return new Bone(this.right,this.left);
    }

    areSidesEqual() {
        return this.left == this.right;
    }

    value () {
        return this.left + this.right;
    }

    greater (other) {
        return this.value() > other.value()? this: other;
    }

    isSame(other) {
        return this.left == other.left && this.right == other.right;
    }

    whichSideCanBeMerged(other) {
        let sides = Object.keys(other);
        return sides.filter((side) => Object.values(this).includes(other[side]));
    }
}

module.exports = Bone;