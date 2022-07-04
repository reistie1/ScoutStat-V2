export default class PlayerStats {
    assists: number[];
    blocked: number[];
    evenTimeOnIce: number[];
    evenTimeOnIcePerGame: number[];
    faceOffPct: number[];
    gameWinningGoals: number[];
    games: number[];
    goals: number[];
    hits: number[];
    overTimeGoals: number[];
    penaltyMinutes: number[];
    pim: number[];
    plusMinus: number[];
    points: number[];
    powerPlayGoals: number[];
    powerPlayPoints: number[];
    powerPlayTimeOnIce: number[];
    powerPlayTimeOnIcePerGame: number[];
    shifts: number[];
    shortHandedGoals: number[];
    shortHandedPoints: number[];
    shortHandedTimeOnIce: number[];
    shortHandedTimeOnIcePerGame: number[];
    shotPct: number[];
    shots: number[];
    timeOnIce: number[];
    timeOnIcePerGame: number[];

    constructor()
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

    
    updateStatList(statName: string, data: any){
        [statName].push(data);
    }

    getStatList(statName: string){
        return [statName];
    }

    getStats()
    {
        return this;
    }
}