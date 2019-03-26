class Player{
    constructor(name,sessionid,bones){
        this.name = name;
        this._bones = bones;
        this.sessionid = sessionid;
    }

    addBone (bone) {
        this._bones.add(bone);
    }

    state() {
       return { [this.name] : this._bones };
    }

    highestBone(){
        this._bones.highest();
    }
}

module.exports = Player;