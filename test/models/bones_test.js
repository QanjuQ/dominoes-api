const Bones = require('../../src/models/bones.js');
const Bone = require('../../src/models/bone.js');
const assert = require('chai').assert;

const boneList = (bones) => bones.map((bone)=> new Bone(bone[0],bone[1]));

describe("Bones",()=>{
    let bones;

    beforeEach(()=>{
        const boneValues = [[1,2],[3,4],[6,6],[5,5],[0,4]];
        bones = new Bones(boneList(boneValues));
    });

    describe("remove",()=>{
        it("Should return a new collection after removing a particular bone",()=>{
            const bone = new Bone(1,2);
            const expected = new Bones(boneList([[3,4],[6,6],[5,5],[0,4]]));
            const actual = bones.remove(bone);
            assert.deepEqual(expected,actual);
        });

        it("Should return a same collection when bone doesn't exist",()=>{
            const bone = new Bone(2,2);
            const expected = new Bones(boneList([[1,2],[3,4],[6,6],[5,5],[0,4]]));
            const actual = bones.remove(bone);
            assert.deepEqual(expected,actual);
        });
    });

    describe("doubles",()=>{
        it("Should a collection of bones having both sides same",()=>{
            const expected = new Bones(boneList([[6,6],[5,5]]));
            const actual = bones.doubles();
            assert.deepEqual(expected,actual);
        });
        it("Should a return empty collection when no bone have both sides same",()=>{
            const bones = new Bones(boneList([[1,2],[2,3],[3,4]]));
            const expected = new Bones(boneList([]));
            const actual = bones.doubles();
            assert.deepEqual(expected,actual);
        });
    });

    describe("greatestDouble",()=>{
        it("Should a bone having both sides same and greatest value",()=>{
            const expected = new Bones(boneList([[6,6],[5,5]]));
            const actual = bones.doubles();
            assert.deepEqual(expected,actual);
        });
    });

    describe("greatest",()=>{
        it("Should return the bone with greatest value",()=>{
            const expected = new Bone(6,6);
            assert.deepEqual(expected,bones.greatest());
        });
        it("Should return the first bone with greatest value",()=>{
            const expected = new Bone(5,2);
            const bones = new Bones(boneList([[1,2],[5,2],[3,4],[6,1]]));
            assert.deepEqual(expected,bones.greatest());
        });
    });

    describe("first",()=>{
        it("Should return the first bone when it has two or more(2) bones",()=>{
            const bones = new Bones(boneList([[1,2],[2,3],[3,4]]));
            const expected = new Bone(1,2);
            assert.deepEqual(expected,bones.first());
        });

        it("Should return the undefined when it has zero(0) bones",()=>{
            const bones = new Bones(boneList([]));
            assert.deepEqual(undefined,bones.first())
        });
        it("Should return the only bone when it has one(1) bones",()=>{
            const bones = new Bones(boneList([[1,2]]));
            const expected = new Bone(1,2);
            assert.deepEqual(expected,bones.first())
        });
    });

    describe("last",()=>{
        it("Should return the last bone when it has two or more(2) bones",()=>{
            const bones = new Bones(boneList([[1,2],[2,3],[3,4]]));
            const expected = new Bone(3,4);
            assert.deepEqual(expected,bones.last());
        });

        it("Should return the undefined when it has zero(0) bones",()=>{
            const bones = new Bones(boneList([]));
            assert.deepEqual(undefined,bones.last())
        });

        it("Should return the only bone when it has one(1) bones",()=>{
            const expected = new Bone(1,2);
            const bones = new Bones(boneList([[1,2]]));
            assert.deepEqual(expected,bones.last())
        });
    });

});