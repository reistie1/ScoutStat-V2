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
    teamName: string | null
}


export default class TeamReports extends Component<{}, TeamStatsState> {

    getTeamsYearStats = (year: string) =>
    {
        let TeamData = new TeamStatsData();
        dataService.fetchTeamStatsByYearAsync((teamStats: any, teamRankings: any, teamName: string) => {
            Object.keys(teamStats).forEach((value: any, index: number) => {
                TeamData.updateData(value, teamStats[value]);
            });
            Object.keys(teamRankings).forEach((value: any, index: number) => {
                TeamData.updateRank(value, teamRankings[value])
            });
            this.setState({teamStats: TeamData.getAllMetrics()});
        }, year, localStorage.getItem("selectedTeamId"));
    }

    componentDidMount()
    {
        let team = window.localStorage.getItem("selectedTeam");
        this.setState({teamName: team});
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
                    <div style={{display: 'flex', alignContent: 'flex-end'}}>       
                        <h2>{this.state?.teamName}</h2>
                        <TeamForm onSelected={this.getTeamsYearStats}/> 
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                        {
                            this.state?.teamStats?.map((value: any, index: number) => { return <StatsContainer key={index} name={value.name} value={value.value} rank={value.rank}/> })
                        }     
                    </div>          
                </div>
            </>
        )
    }
   
}
