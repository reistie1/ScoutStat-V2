export default class PlayerStats {
    constructor(season, stats)
    {
        this.assists = [];
        this.blocked = [];
        this.evenTimeOnIce = [];
        this.evenTimeOnIcePerGame = [];
        this.faceOffPct = [];
        this.gameWinningGoals = [];
        this.games = [];
        this.goals = [];
        this.hits = [];
        this.overTimeGoals = [];
        this.penaltyMinutes = [];
        this.pim = [];
        this.plusMinus = [];
        this.points = [];
        this.powerPlayGoals = [];
        this.powerPlayPoints = [];
        this.powerPlayTimeOnIce = [];
        this.powerPlayTimeOnIcePerGame = [];
        this.shifts = [];
        this.shortHandedGoals = [];
        this.shortHandedPoints = [];
        this.shortHandedTimeOnIce = [];
        this.shortHandedTimeOnIcePerGame = [];
        this.shotPct = [];
        this.shots = [];
        this.timeOnIce = [];
        this.timeOnIcePerGame = [];
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