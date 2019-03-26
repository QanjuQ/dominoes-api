const popRandom = (number,array) => {
    let elements = [];
    for (let count = 0; count < number; count++) {
        let index = randomIndex(array.length)
        elements.push(array[index]);
        array = deleteAt(array,index);
    }
    return elements;
};

class Boneyard {
    constructor(bones) {
        this.bones = bones;   
    }

    isEmpty() {
        return this.bones.length == 0;
    }
    
    draw(count) {
        return popRandom(count,this.bones);
    }
}