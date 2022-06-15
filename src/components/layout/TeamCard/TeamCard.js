import React, { Component } from 'react';
import TeamColours from '../../../misc/TeamColors';

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
        console.log(colours, this.props.team.name);
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
            console.log(colours, this.props.team);
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
            <div style={{width: '300px', height: '150px', border: '1px solid gray', borderRadius: '6px', position: 'relative', margin: '0.75rem'}}>
                <div style={{width: 0, height: 0, zIndex: 4, borderLeft: `300px solid ${this.state.primaryColour}`, borderBottom: '150px solid transparent'}}></div>
                <div style={{width: 0, height: 0, zIndex: 4, borderRight: `300px solid ${this.state.secondaryColour}`, borderTop: '150px solid transparent', position: 'absolute', top: 0}}></div>

                <div style={{zIndex: '20', width: '100%', height: '50%', position: 'absolute', top: 0, margin: '0 auto', color: 'white', padding: '0 0.5rem'}}>
                    <h6 style={{zIndex: 20}}>{this.props.team.name}</h6>
                    <p style={{zIndex: 20, cursor: 'pointer'}} onClick={() => this.props.getTeam(this.props.team.id)}>Select Team</p>
                    <div style={{position: 'relative', right: '0', bottom: '0.5rem', color: `${this.state.primaryColour}`}}>
                        <p style={{zIndex: 20, margin: 0, padding: 0, float: 'right'}}>Division: {this.props.team.division.name}</p>
                        <p style={{zIndex: 20, margin: 0, padding: 0, float: 'right'}}>Conference: {this.props.team.conference.name}</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
