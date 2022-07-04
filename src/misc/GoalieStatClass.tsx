export default class GoalieStats {
        evenSaves: number[];
        evenShots: number[];
        evenStrengthSavePercentage: number[];
        games: number[];
        gamesStarted: number[];
        goalAgainstAverage: number[];
        goalsAgainst: number[];
        losses: number[];
        ot: number[];
        powerPlaySavePercentage: number[];
        powerPlaySaves: number[];
        powerPlayShots: number[];
        savePercentage: number[];
        saves: number[];
        shortHandedSavePercentage: number[];
        shortHandedSaves: number[];
        shortHandedShots: number[];
        shotsAgainst: number[];
        shutouts: number[];
        ties: number[];
        timeOnIce: number[];
        timeOnIcePerGame: number[];
        wins: number[];

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