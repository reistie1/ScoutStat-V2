import React, { Component } from 'react';
import TeamColours from '../../../misc/TeamColors';


export default class PlayerCard extends Component {
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
        let colours = TeamColours[this.props.team.toLowerCase()]
        this.setState({
            team: this.props.team,
            secondaryColour: colours['color2'],
            primaryColour: colours['color1']       
        });
    }

    componentDidUpdate(prevProps, prevState)
    {
        if(this.props.team.name !== prevProps.team.name)
        {
            let colours = TeamColours[this.props.team.toLowerCase()]
            this.setState({
                team: this.props.team,
                secondaryColour: colours['color2'],
                primaryColour: colours['color1']       
            });
        }
    }
    
    render() {
        return (
            <div>
                <div style={{backgroundColor: `${this.state.primaryColour}`, width: '200px', height: '200px', margin: '0.5rem', textAlign: 'center', padding: '1rem'}}>
                    <div style={{color: `${this.state.secondaryColour}`}}>
                        <h6 style={{zIndex: 20}}>{this.props.player.person.fullName}</h6>
                        <h6>{this.props.player.jerseyNumber}</h6>
                        <h6>{this.props.player.position.name}</h6>
                    </div>
                </div>
            </div>
        )
    }
}
