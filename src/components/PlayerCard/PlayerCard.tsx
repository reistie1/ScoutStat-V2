import React, { Component } from 'react';
import TeamColours from '../../misc/TeamColors';
import colourScheme from '../../misc/IcolourScheme';
import TeamCard from '../TeamCard/TeamCard';
import './PlayerCard.css';

type CardState = {
    team: colourScheme
}


export default class PlayerCard extends Component<{player: any, team: any}, CardState> {

    componentDidMount()
    {
        let team: colourScheme = TeamColours.filter(value => {return value.name === this.props.team.toLowerCase()})[0];
        this.setState({ team: team });
    }

    componentDidUpdate(prevProps: any, prevState: any)
    {
        if(this.props.team.name !== prevProps.team.name)
        {
            let team: colourScheme = TeamColours.filter(value => {return value.name === this.props.team.toLowerCase()})[0];
            this.setState({ team: team });
        }
    }
    
    render() {
        console.log(this.state, this.props);
        return (
            <div>
                <div className="player-card" onClick={(e) => {window.location.href = "/player"; window.localStorage.setItem("selectedPlayer", this.props.player.person.fullName); window.localStorage.setItem("selectedPlayerId", this.props.player.person.id)}}>
                    <div style={{backgroundColor: `${this.state?.team.color1}`, color: `${this.state?.team.color2}`, padding: '0.1rem'}}>
                        <h6>{this.props.player.person.fullName}</h6>
                        <h6>{this.props.player.jerseyNumber}</h6>
                        <h6>{this.props.player.position.name}</h6>
                    </div>
                </div>
            </div>
        )
    }
}
