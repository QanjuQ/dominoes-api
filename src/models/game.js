const popRandom = (number,array) => {
    let elements = [];
    for (let count = 0; count < number; count++) {
        let index = randomIndex(array.length)
        elements.push(array[index]);
        array = deleteAt(array,index);
    }
    return elements;
};

const quotient = (dividend,divider) => Math.floor(dividend/divider);

class Game {
    constructor(boneYard,numberOfPlayers=2) {
        this._boneYard = boneyard;
        this.players = [];
        this.numberOfPlayers = numberOfPlayers;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    setup() {
        this.players.forEach(player =>
            player.addBones(this._boneYard.draw()));
    }

    hasEnoughPlayers() {
        return this.players.length = this.numberOfPlayers;
    }

    state () {
        return { players: this.players.reduce((state, player)=> ({...state,...player.state()}),{}),
            dock: this._dock};

    }

    assignTurn() {
        let playersHighestBones = this.players.reduce((highestBones,player)=>{
            highestBones[player.name] = player.highest();
            return highestBones;
        }); 
        
        playersHighestBones.
    }

}

module.exports = Game;