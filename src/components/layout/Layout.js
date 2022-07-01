import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import dataService from '../../services/dataService';
import TeamCard from '../TeamCard/TeamCard';
import PlayerCard from '../PlayerCard/PlayerCard';

export default class Layout extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            teams: [],
            type: 'teams',
            players: [],
            team: ''
        }
        this.getSingleTeam = this.getSingleTeam.bind(this);
    }

    componentDidMount()
    {
        dataService.fetchTeamsAsync((data) => {
            this.setState({teams: data});
        });
    }

    getSingleTeam(id, teamName)
    {
        dataService.fetchTeamAsync((data) => {
            this.setState({type: 'players', players: data, team: teamName})
        }, id);
    }

    render() {
        return (
            <div>
                {/* <Sidebar/> */}
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem 0'}}>
                    {
                        this.state.type === "teams" ?
                        this.state.teams.map((value,index) => {
                            return <TeamCard key={value.id} team={value} getTeam = {this.getSingleTeam} />
                        })
                        :
                        this.state.players.map((value,index) => {
                            return <PlayerCard key={index} player={value} team={this.state.team}/>
                        })
                    }
                </div>
                {/* <Footer /> */}
            </div>
        )
    }
}
