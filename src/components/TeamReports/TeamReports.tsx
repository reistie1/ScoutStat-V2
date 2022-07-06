import React, {Component} from 'react';
import dataService from '../../services/dataService';
import StatsContainer from '../StatsContainer/StatsContainer';
import TeamColors from '../../misc/TeamColors';
import TeamForm from '../TeamForm/TeamForm';
import TeamDataMetric from '../../Interfaces/TeamDataMetric';
import TeamMetrics from '../../Interfaces/TeamMetrics';
import TeamStatsData from '../../Classes/TeamStatsData';

type TeamStatsState = {
    teamStats: any
    teamRankings: any
}


export default class TeamReports extends Component<{}, TeamStatsState> {

    getTeamsYearStats = (year: string) =>
    {
        let TeamData = new TeamStatsData();
        let TeamRankingData = new TeamStatsData();
        dataService.fetchTeamStatsByYearAsync((teamStats: any, teamRankings: any) => {
            Object.keys(teamStats).forEach((value: any, index: number) => {
                TeamData.updateData(value, teamStats[value]);
            });
            Object.keys(teamRankings).forEach((value: any, index: number) => {
                TeamRankingData.updateData(value, teamRankings[value]);
            });
            this.setState({teamStats: TeamData.getAllMetrics(), teamRankings: TeamRankingData.getAllMetrics()});
        }, year, localStorage.getItem("selectedTeamId"));
    }

    
    render()
    {
        console.log(this.state)
        return (
            <>
                <div className="container" style={{height: '625px', overflowX: 'scroll'}}>
                    <div className="row d-flex justify-content-between align-items-center">
                        <h3 className="text-left p-3 col-4">Team Information</h3>
                        <a className="col-3 p-3 text-right" href="/" aria-label="home link">Go back to team selection</a>
                    </div>
                    <TeamForm onSelected={this.getTeamsYearStats}/>   
                    {
                        this.state?.teamStats.map((value: any, index: number) => { return <p key={index}>{value.name} - {value.value}</p> })
                    }  
                    {
                        this.state?.teamRankings.map((value: any, index: number) => { return <p key={index}>{value.name} - {value.value}</p> })
                    }              
                </div>
            </>
        )
    }
   
}
