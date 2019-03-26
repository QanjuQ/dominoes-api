const assert = require('chai').assert;
const Bone = require('../../src/models/bone.js');

describe("Bone Test",()=>{

    describe("bone.flip()",()=>{
        it("Should flip a bone given when both side are different",() =>{
            const expected = new Bone(1,2);
            const actual = new Bone(2,1).flip();
            assert.deepEqual(actual,expected);
        });

        it("Should return the same bone given when both side are same",() =>{
            const expected = new Bone(2,2);
            const actual = new Bone(2,2).flip();
            assert.deepEqual(actual,expected);
        });

    });

    describe("bone.areSideEqual()",()=>{
        it("Should return true when both sides are equal",()=>{
            assert.isTrue(new Bone(6,6).areSidesEqual());
        });

        it("Should return false when both sides are not equal",()=>{
            assert.isFalse(new Bone(5,6).areSidesEqual());
        });
    });

    describe("bone.value()",()=>{
        it("Should the sum of both the sides",()=>{
            assert.equal(new Bone(6,3).value(),9);
        });
    });

    describe("bone.greater()",()=>{
        it("Should return the bone with greater value",()=>{
          const bone1 = new Bone(1,2);
          const bone2 = new Bone(3,2);
          assert.deepEqual(bone1.greater(bone2),bone2);
        });

        it("Should return the other bone with greater value",()=>{
          const bone1 = new Bone(1,4);
          const bone2 = new Bone(3,2);
          assert.deepEqual(bone1.greater(bone2),bone2);
        });
    });

    describe("bone.isSame(other)",()=>{
        it("Should return true when other bone has same sides",()=>{
            const bone1 = new Bone(1,4);
            const bone2 = new Bone(1,4);
            assert.isTrue(bone1.isSame(bone2));
        });

        it("Should return false when other bone has one of the side not equal",()=>{
            const bone1 = new Bone(5,4);
            const bone2 = new Bone(1,4);
            assert.isFalse(bone1.isSame(bone2));
        });

        it("Should return false when both sides have equal values but flipped",()=>{
            const bone1 = new Bone(4,1);
            const bone2 = new Bone(1,4);
            assert.isFalse(bone1.isSame(bone2));
        });
    });

    describe("whichSideCanBeMerged",()=>{
        it("Should return the side that is equal when one side is equal",()=>{
            const bone1 = new Bone(4,5);
            const bone2 = new Bone(1,4);
            assert.deepEqual(bone1.whichSideCanBeMerged(bone2),["right"]);
        });

        it("Should return the side that is equal when  both sides are equal",()=>{
            const bone1 = new Bone(4,1);
            const bone2 = new Bone(1,4);
            assert.deepEqual(bone1.whichSideCanBeMerged(bone2),["left","right"]);
        });
    });

});