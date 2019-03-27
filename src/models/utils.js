const dominoes = [
    [0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6],
    [1,1], [1,2], [1,3], [1,4], [1,5], [1,6],
    [2,2], [2,3], [2,4], [2,5], [2,6],
    [3,3], [3,4], [3,5], [3,6],
    [4,4], [4,5], [4,6],
    [5,5], [5,6],
    [6,6]
];

const deleteAt = (array, index) => [...array.slice(0,index), ...array.slice(index+1,array.length)];

const randomIndex = (max) => Math.floor(Math.random() * max );

const areSame = (list,other) =>{
    if(list.length != other.length) {
        return false;
    }
    for(let index = 0; index < list.length; index++) {
        if(list[index] != list[index]){
            return false;
        }
    }
    return true;
};

module.exports = {
    dominoes,
    deleteAt,
    randomIndex,
    areSame
};