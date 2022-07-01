import React, { Component } from 'react'
import dataService from '../../services/dataService';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import StatFilter from './StatFilter';

export default class PlayerContainer extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            selectedYear: '',
            player: null
        }
    }

    componentDidMount()
    {
        dataService.fetchPlayerInfoAsync((resp) => { this.setState({...this.state, player: resp}) }, window.localStorage.getItem("selectedPlayerId"));
    }

    componentDidUpdate(prevProps, prevState){}


    render() {
        return (
            <div className="container col-12">
            <h1 style={{marginBottom: '2rem', textAlign: 'center'}}>Player Information</h1>
            {
                this.state.player !== null ? <PlayerInfo player={this.state.player} /> : null
            }
            <StatFilter />
            </div>
        ) 
    }
}
