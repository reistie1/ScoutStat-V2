import React, { Component } from 'react'
import dataService from '../../services/dataService';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import YearFilter from '../YearFilter/YearFilter';
import DataChart from '../DataChart/DataChart';
import PlayerStatsData from '../../Classes/PlayerStatsData';

type containerState = {
    player: any,
    stats: any,
    playerStatsData: any[],
    yearSpan: { start: 'N/A', end: 'N/A' }
}

export default class PlayerContainer extends Component<{}, containerState> {

    componentDidMount()
    {
        dataService.fetchPlayerInfoAsync((resp: any) => { this.setState({...this.state, player: resp}) }, window.localStorage.getItem("selectedPlayerId"));
    }

    getPlayerData()
    {
        dataService.fetchPlayerDataAsync((data: any) => {this.setState({playerStatsData: data, stats: null})}, window.localStorage.getItem("selectedPlayerId"), {startYear: this.state.yearSpan.start, endYear: this.state.yearSpan.end})
    }

    componentDidUpdate(prevProps: any, prevState: any)
    {
        const {yearSpan, playerStatsData} = this.state;

        if(yearSpan?.end !== prevState?.yearSpan?.end && yearSpan?.start !== 'N/A')
        {
            this.getPlayerData()
        }
        if(yearSpan?.start !== prevState?.yearSpan?.start && yearSpan?.end !== 'N/A')
        {
            this.getPlayerData()
        }
        if(playerStatsData !== prevState?.playerStatsData)
        {
            if(playerStatsData.length > 0)
            {
                let stats = new PlayerStatsData();

                playerStatsData.filter((value: any) => {return value !== undefined}).map((value: any, index: number) => {
                    return Object.keys(value.data).map((innerValue, innerIndex) => {
                        return stats.updateData(innerValue, {season: value.season, dataPoint: value.data[innerValue]});
                    });
                });

                this.setState({stats: stats});
            }
        }
    }

    chartFilterFn = (value: any, index: number) => {
        if(!(value.label.indexOf("Time") > -1 || value.label.indexOf("time") > -1))
        {
            return <DataChart key={index} name={value.label} data={value.dataPoints}/>
        }
    }


    render() {
        console.log(this.state, this.props);
        return (
            <div className="container col-12" style={{height: '625px', overflowX: 'scroll'}}>

                <div className="row d-flex justify-content-between">
                    <h3 className="text-left p-3 col-4">Player Information</h3>
                    <a className="col-3 p-3 text-right" href="/" aria-label="home link">Go back to team selection</a>
                </div>

                <div className="col-12 d-flex flex-row">
                    <div className="col-4">
                    {
                        <YearFilter onUpdate={(data: any) => { this.setState({ yearSpan: data }) }}/>                
                    }
                    </div>
                    <div className="col-8 pl-0">
                    {
                        this.state?.player && <PlayerInfo player={this.state?.player} />
                    }
                    </div>
                </div>
                
                <div className="col-12 p-2 mt-2">
                    <h5 className="col-4 text-center">{`Player Stats from ${this.state?.yearSpan?.start} - ${this.state?.yearSpan?.end}`}</h5>
                    <div className="col-12 d-flex flex-wrap flex-row justify-content-evenly p-3">
                        { 
                            this.state?.stats && this.state.stats?.MetricsList.map(this.chartFilterFn) 
                        }
                    </div> 
                </div>
            </div>
        ) 
    }
}
