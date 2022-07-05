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
            <div className="team-wrapper" style={{border: `2px solid ${this.state?.team.color1}`}} onClick={() => this.props.getTeam(this.props.team.id, this.props.team.name)}>
                {/* <div className="top-triangle" style={{borderLeft: `300px solid ${this.state?.team.color1}`, borderBottom: '150px solid transparent', borderRadius: '10px'}}></div> */}
                {/* <div className="bottom-triangle" style={{borderRight: `300px solid ${this.state?.team.color2}`, borderTop: '150px solid transparent', borderBottomLeftRadius: '10px'}}></div> */}
                <div className="team-info-wrapper" style={{color: 'black'}}>
                    <h6 style={{zIndex: 20}}>{this.props.team.name}</h6>
                    <div className="team-info-container d-flex flex-column">
                        <p className="team-info-item text-right">Division: {this.props?.team.division.name}</p>
                        <p className="team-info-item text-right">Conference: {this.props?.team.conference.name}</p>
                    </div>
                </div>
            </div>
        )
    }
}
