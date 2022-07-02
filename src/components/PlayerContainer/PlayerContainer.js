import React, { Component } from 'react'
import dataService from '../../services/dataService';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import StatFilter from './StatFilter';
import StatChart from './StatChart';

const playerStats = {
    assists: [],
    blocked: [],
    evenTimeOnIce: [],
    evenTimeOnIcePerGame: [],
    faceOffPct: [],
    gameWinningGoals: [],
    games: [],
    goals: [],
    hits: [],
    overTimeGoals: [],
    penaltyMinutes: [],
    pim: [],
    plusMinus: [],
    points: [],
    powerPlayGoals: [],
    powerPlayPoints: [],
    powerPlayTimeOnIce: [],
    powerPlayTimeOnIcePerGame: [],
    shifts: [],
    shortHandedGoals: [],
    shortHandedPoints: [],
    shortHandedTimeOnIce: [],
    shortHandedTimeOnIcePerGame: [],
    shotPct: [],
    shots: [],
    timeOnIce: [],
    timeOnIcePerGame: []
}

export default class PlayerContainer extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            player: null,
            playerStats: [],
            stats: null,
            yearSpan: {
                start: 'none',
                end: 'none'
            }
        }
    }

    componentDidMount()
    {
        dataService.fetchPlayerInfoAsync((resp) => { this.setState({...this.state, player: resp}) }, window.localStorage.getItem("selectedPlayerId"));
    }

    componentDidUpdate(prevProps, prevState)
    {
        if(this.state.yearSpan.end !== prevState.yearSpan.end)
        {
            dataService.fetchPlayerDataAsync((data) => {this.setState({playerStats: data})}, window.localStorage.getItem("selectedPlayerId"), {startYear: this.state.yearSpan.start, endYear: this.state.yearSpan.end})
        }
        if(this.state.playerStats !== prevState.playerStats)
        {
            if(this.state.playerStats.length > 0)
            {
                let filteredStats = this.state.playerStats.filter(value => {return value !== undefined}).map((value, index) => {
                    return Object.keys(value.data).map((innerValue, innerIndex) => {
                        return playerStats[innerValue].push({season: value.season, dataPoint: value.data[innerValue]});
                    });
                });

                this.setState({stats: filteredStats});
            }
        }
    }


    render() {
        console.log(this.state, this.props);
        return (
            <div className="container col-12">
                <div className="row d-flex justify-content-between">
                    <h3 className="text-left p-3 col-4">Player Information</h3>
                    <a className="col-3 p-3 text-right" href="/" aria-label="home link">Go back to team selection</a>
                </div>
                <div className="col-12 d-flex flex-row">
                    <div className="col-4">
                    {
                        <StatFilter onUpdate={(data) => { this.setState({ yearSpan: data }) }}/>                
                    }
                    </div>
                    <div className="col-8 pl-0">
                    {
                        this.state.player !== null ? <PlayerInfo player={this.state.player} /> : null
                    }
                    </div>
                </div>
                
                <div className="col-12 p-2 mt-2">
                    <h5 className="col-2 text-center">{`Player Stats from ${this.state.yearSpan.start} - ${this.state.yearSpan.end}`}</h5>
                    <div className="col-12 d-flex flex-wrap flex-row justify-content-evenly p-3">
                    
                    {
                        Object.keys(playerStats).map((value, index) => { 
                            if(!(value.indexOf("Time") > -1 || value.indexOf("time") > -1))
                            {
                                return <StatChart key={index} name={value} data={playerStats[value]}/>
                            }
                        })
                    }
                    </div> 
                </div>
            </div>
        ) 
    }
}
