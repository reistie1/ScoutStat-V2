import React, { Component } from 'react'
import dataService from '../../services/dataService';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import StatFilter from './StatFilter';
import StatChart from './StatChart';

export default class PlayerContainer extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            player: null,
            playerStats: [],
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
            var GroupedStats;
            if(this.state.playerStats.length > 0)
            {
                GroupedStats = Object.keys(this.state.playerStats[0].data);
                //GroupedStats = GroupedStats.map(value => { return {[value]: []} });

                console.log(GroupedStats)

                // GroupedStats = this.state.playerStats.map((value, index) => {
                //     return Object.keys(value.data).map((innerValue, innerIndex) => {
                //         console.log(GroupedStats[innerValue]);
                //         return innerValue;
                //         //return GroupedStats[innerValue] = ({season: value.season, value: value.data[innerValue]});
                //     });
                // });
            }
            

        }
    }


    render() {
        console.log(this.state)
        return (
            <div className="container col-12">
                <h3 className="text-left p-3">Player Information</h3>
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
                        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((value, index) => { return <StatChart name="Goals"/> })
                    }
                    </div> 
                </div>
            </div>
        ) 
    }
}
