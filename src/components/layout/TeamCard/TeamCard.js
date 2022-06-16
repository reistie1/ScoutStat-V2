import React, { Component } from 'react';
import TeamColours from '../../../misc/TeamColors';
import './TeamCard.css'

export default class TeamCard extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            team: '',
            primaryColour: '',
            secondaryColour: ''
        }
    }

    componentDidMount()
    {
        let colours = TeamColours[this.props.team.name.toLowerCase()]
        this.setState({
            team: this.props.team.name,
            secondaryColour: colours['color2'],
            primaryColour: colours['color1']       
        });
    }

    componentDidUpdate(prevProps, prevState)
    {
        if(this.props.team.name !== prevProps.team.name)
        {
            let colours = TeamColours[this.props.team.name.toLowerCase()]
            this.setState({
                team: this.props.team.name,
                secondaryColour: colours['color2'],
                primaryColour: colours['color1']       
            });
        }
    }

    render() {
        console.log(this.state);
        return (
            <div className="team-wrapper" onClick={() => this.props.getTeam(this.props.team.id, this.props.team.name)}>
                <div className="top-triangle" style={{borderLeft: `300px solid ${this.state.primaryColour}`, borderBottom: '150px solid transparent'}}></div>
                <div className="bottom-triangle" style={{borderRight: `300px solid ${this.state.secondaryColour}`, borderTop: '150px solid transparent'}}></div>
                <div className="team-info-wrapper">
                    <h6 style={{zIndex: 20}}>{this.props.team.name}</h6>
                    <div className="team-info-container" style={{color: `${this.state.primaryColour}`}}>
                        <p className="team-info-item">Division: {this.props.team.division.name}</p>
                        <p className="team-info-item">Conference: {this.props.team.conference.name}</p>
                    </div>
                </div>
            </div>
        )
    }
}
