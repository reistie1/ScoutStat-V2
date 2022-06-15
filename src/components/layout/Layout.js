import React, { Component } from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import dataService from '../../services/dataService';
import TeamCard from '../layout/TeamCard/TeamCard';

export default class Layout extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            teams: []
        }
        this.getSingleTeam = this.getSingleTeam.bind(this);
    }

    componentDidMount()
    {
        dataService.fetchTeamsAsync((data) => {
            this.setState({teams: data});
        });
    }

    getSingleTeam(id)
    {
        dataService.fetchTeamAsync(() => {}, id);
    }

    render() {
        return (
            <div>
                {/* <Sidebar/> */}
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        this.state.teams.map((value,index) => {
                            return <TeamCard key={value.id} team={value} getTeam = {this.getSingleTeam} />
                        })
                    }
                </div>
                {/* <Footer /> */}
            </div>
        )
    }
}
