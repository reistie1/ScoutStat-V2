import React, { Component } from 'react';
import TeamColours from '../../misc/TeamColors';
import './PlayerCard.css';


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
                <div className="player-card" onClick={(e) => {window.location = "/player"; window.localStorage.setItem("selectedPlayer", this.props.player.person.fullName); window.localStorage.setItem("selectedPlayerId", this.props.player.person.id)}}>
                    <div style={{backgroundColor: `${this.state.primaryColour}`, color: `${this.state.secondaryColour}`, padding: '0.1rem'}}>
                        <h6>{this.props.player.person.fullName}</h6>
                        <h6>{this.props.player.jerseyNumber}</h6>
                        <h6>{this.props.player.position.name}</h6>
                    </div>
                </div>
            </div>
        )
    }
}
