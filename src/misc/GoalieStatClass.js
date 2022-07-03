export default class GoalieStats {
    constructor()
    {
        this.evenSaves = [];
        this.evenShots = [];
        this.evenStrengthSavePercentage = [];
        this.games = [];
        this.gamesStarted = [];
        this.goalAgainstAverage = [];
        this.goalsAgainst = [];
        this.losses = [];
        this.ot = [];
        this.powerPlaySavePercentage = [];
        this.powerPlaySaves = [];
        this.powerPlayShots = [];
        this.savePercentage = [];
        this.saves = [];
        this.shortHandedSavePercentage = [];
        this.shortHandedSaves = [];
        this.shortHandedShots = [];
        this.shotsAgainst = [];
        this.shutouts = [];
        this.ties = [];
        this.timeOnIce = [];
        this.timeOnIcePerGame = [];
        this.wins = [];
    }

    
    updateStatList(statName, data){
        this[statName].push(data);
    }

    getStatList(statName){
        return this[statName];
    }

    getStats()
    {
        return this;
    }
}