const areSame = require('./utils.js').areSame;
const Bone = require('./bone.js');

class Bones{
    constructor(bones = []) {
        this.bones = bones;
    }

    add(bone) {
        this.bones.push(bone);
    }
    
    remove(boneToRemove) {
        const isNotSame = (bone) => !boneToRemove.isSame(bone);
        return new Bones (this.bones.filter(isNotSame));        
    }

    doubles() {
        return new Bones(this.bones.filter(bone=>bone.areSidesEqual()))
    }
 
    greatestDouble () {
        return this.bones.doubles().greatest(equalSidesBones);
    }

    greatest() {
        return this.bones.reduce((first,second) => { return second.greater(first)},new Bone(0,0));
    }

    first() {
        return this.bones[0];
    } 

    last() {
        return this.bones[this.bones.length-1];
    }
}

module.exports = Bones;
