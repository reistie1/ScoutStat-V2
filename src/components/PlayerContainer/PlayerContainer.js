import React, { Component } from 'react'
import dataService from '../../services/dataService';
import PlayerInfo from '../PlayerInfo/PlayerInfo';

export default class PlayerContainer extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            yearSets: [],
            selectedYear: '',
            player: null
        }
    }

    componentDidMount()
    {
        let yearSets = [];
        for(var year = 2000; year <= new Date().getFullYear(); year++)
        {
            yearSets.push(year.toString());

            // yearSets.push(year.toString()+(year+1).toString());
        }
        dataService.fetchPlayerInfoAsync((resp) => {this.setState({player: resp})}, window.localStorage.getItem("selectedPlayerId"));
        this.setState({yearSets: yearSets});
    }

    componentDidUpdate(prevProps, prevState)
    {
        if(prevState.selectedYear !== this.state.selectedYear)
        {
            //dataService.fetchPlayerDataAsync(() => {}, window.localStorage.getItem("selectedPlayerId"), this.state.selectedYear);
        }
    }


    render() {
        return (
            <div style={{padding: '1rem'}}>
                <select onChange={(e) => { this.setState({selectedYear: e.target.value}) }}>
                {
                    this.state.yearSets.map((value, index) => { return <option key={index} value={value}>{value}</option> })
                }
                </select>
                {
                    this.state.player !== null ? <PlayerInfo player={this.state.player} /> : null
                }
            </div>
        ) 
    }
}
