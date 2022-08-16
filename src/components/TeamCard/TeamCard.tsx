import React, { Component } from 'react';
import TeamColours from '../../misc/TeamColors';
import colourScheme from '../../Interfaces/ColourScheme';
import './TeamCard.css'

type CardState = {
    team: colourScheme
}

export default class TeamCard extends Component<{team: any, getTeam: (id: number, teamName: string) => void}, CardState> {

    componentDidMount()
    {
        let team: colourScheme = TeamColours.filter(value => {return value.name === this.props.team.name.toLowerCase()})[0];
        this.setState({ team: team });
    }

    componentDidUpdate(prevProps: any, prevState: any)
    {
        if(this.props.team.name !== prevProps.team.name)
        {
            let team: colourScheme = TeamColours.filter(value => {return value.name === this.props.team.name.toLowerCase()})[0];
            this.setState({ team: team });
        }
    }

    render() {
        return (
            <div className="team-wrapper p-0" style={{border: `2px solid ${this.state?.team.color1}`}} onClick={() => this.props.getTeam(this.props.team.id, this.props.team.name)}>
                <div className="p-0 text-center" style={{color: 'black'}}>
                    <h6 style={{zIndex: 20}}>{this.props.team.name}</h6>
                    <div style={{height: '25px'}} className="m-0">
                        <div style={{width: '100%', height: '10%', marginBottom: '0.4rem', backgroundColor: `${this.state?.team.color1}`, zIndex: 100}}></div>
                        <div style={{width: '100%', height: '10%', backgroundColor: `${this.state?.team.color2}`, zIndex: 100}}></div>
                    </div>
                    <div style={{height: '70px'}} className="d-flex flex-column justify-content-end align-items-end p-2">
                        <p className='p-0 m-0'>Division: {this.props?.team.division.name}</p>
                        <p className='p-0 m-0'>Conference: {this.props?.team.conference.name}</p>
                    </div>
                </div>
            </div>
        )
    }
}
