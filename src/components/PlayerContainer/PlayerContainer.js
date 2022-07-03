import React, { Component } from 'react'
import dataService from '../../services/dataService';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import StatFilter from './StatFilter';
import StatChart from './StatChart';
import PlayerStatClass from '../../misc/PlayerStatClass';
import GoalieStatClass from '../../misc/GoalieStatClass';

export default class PlayerContainer extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            player: null,
            stats: null,
            playerStatsData: [],
            yearSpan: { start: 'N/A', end: 'N/A' }
        }
        this.chartFilterFn = this.chartFilterFn.bind(this);
    }

    componentDidMount()
    {
        dataService.fetchPlayerInfoAsync((resp) => { this.setState({...this.state, player: resp}) }, window.localStorage.getItem("selectedPlayerId"));
    }

    componentDidUpdate(prevProps, prevState)
    {

        if(this.state.yearSpan.end !== prevState.yearSpan.end && this.state.yearSpan.start !== 'N/A')
        {
            dataService.fetchPlayerDataAsync((data) => {this.setState({playerStats: data, stats: null})}, window.localStorage.getItem("selectedPlayerId"), {startYear: this.state.yearSpan.start, endYear: this.state.yearSpan.end})
        }
        if(this.state.yearSpan.start !== prevState.yearSpan.start && this.state.yearSpan.end !== 'N/A')
        {
            dataService.fetchPlayerDataAsync((data) => {this.setState({playerStats: data, stats: null})}, window.localStorage.getItem("selectedPlayerId"), {startYear: this.state.yearSpan.start, endYear: this.state.yearSpan.end})
        }
        if(this.state.playerStats !== prevState.playerStats)
        {
            if(this.state.playerStats.length > 0)
            {
                let stats = (this.state.player && this.state.player.primaryPosition.code === 'G') ? new GoalieStatClass() : new PlayerStatClass();
                
                this.state.playerStats.filter(value => {return value !== undefined}).map((value, index) => {
                    return Object.keys(value.data).map((innerValue, innerIndex) => {
                        return stats.updateStatList(innerValue, {season: value.season, dataPoint: value.data[innerValue]});
                    });
                });

                this.setState({stats: stats});
            }
        }
    }

    chartFilterFn = (value, index) => {
        if(!(value.indexOf("Time") > -1 || value.indexOf("time") > -1))
        {
            return <StatChart key={index} name={value} data={this.state.stats.getStatList(value)}/>
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
                        this.state.player && <PlayerInfo player={this.state.player} />
                    }
                    </div>
                </div>
                
                <div className="col-12 p-2 mt-2">
                    <h5 className="col-2 text-center">{`Player Stats from ${this.state.yearSpan.start} - ${this.state.yearSpan.end}`}</h5>
                    <div className="col-12 d-flex flex-wrap flex-row justify-content-evenly p-3">
                        { 

                            this.state.stats && Object.keys(this.state.stats).map(this.chartFilterFn) 
                        }
                    </div> 
                </div>
            </div>
        ) 
    }
}
