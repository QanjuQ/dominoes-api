class LineOfPlay{
    constructor(bones) {
        this.bones = bones;
    }

    openEnds() {
        let bones = this.bones;
        return new Bone(bones[0].left,bones[bones.length-1].right);
    }
}