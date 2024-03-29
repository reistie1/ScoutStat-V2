import React, { Component } from 'react';
import dataService from '../../services/dataService';
import TeamCard from '../TeamCard/TeamCard';
import PlayerCard from '../PlayerCard/PlayerCard';
// import Sidebar from '../Sidebar/Sidebar';


type PlayerState = {
    teams: string[];
    players: string[];
    type: string;
    team: string;
    showSelection: boolean;
}

export default class Layout extends Component<{}, PlayerState> {


    componentDidMount()
    {
        dataService.fetchTeamsAsync((data: any) => { this.setState({teams: data, type: "teams"}) });
    }

    getSingleTeam(id: number, teamName: string, state: PlayerState)
    {
        let result = window.confirm("Would you like to view team players, click yes or cancel to view team stats.");

        if(result)
        {
            dataService.fetchTeamAsync((data: any) => { this.setState({type: 'players', players: data, team: teamName}) }, id);
        }
        else
        {
            localStorage.setItem("selectedTeamId", id.toString());
            localStorage.setItem("selectedTeam", teamName);
            window.location.href = "/teams";
        }
    }

    render() {
        console.log(this.state);
        return (
            <div>
                {/* <Sidebar/> */}
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: '2rem', height: '625px', overflowX: 'scroll'}}>
                    {
                        this.state?.type === "teams" ?
                        this.state?.teams.map((value: any, index: number) => {
                            return <TeamCard key={value.id} team={value} getTeam={(id, name) => this.getSingleTeam(id, name, this.state)} />
                        })
                        :
                        this.state?.players.map((value: any, index: number) => {
                            return <PlayerCard key={index} player = {value} team={this.state.team}/>
                        })
                    } 
                </div>
            </div>
        )
    }
}
