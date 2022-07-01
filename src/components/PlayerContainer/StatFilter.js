import React, { Component } from 'react'

export default class StatFilter extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            years: []
        }
    }
    
    componentDidMount()
    {
        let yearArray = [];
        for(var year = 1993; year <= new Date().getFullYear(); year++)
        {
            yearArray.push(year);
        }

        this.setState({years: yearArray});
    }

    render() {
        return (
            <div className="container col-12 d-flex p-3 justify-content-md-center">
                <div className="col-3">
                    <label for="startYearSelect">Start Year</label>
                    <select class="form-select" id="startYearSelect" aria-label="start year select" onChange={(e) => { this.setState({selectedYear: e.target.value}) }}>
                    {
                        this.state.years.map((value, index) => { return <option key={index} value={value}>{value}</option> })
                    }
                    </select> 
                </div>
                <div className="col-3">
                    <label for="startYearSelect">End Year</label>
                    <select class="form-select" id="startYearSelect" aria-label="start year select" onChange={(e) => { this.setState({selectedYear: e.target.value}) }}>
                    {
                        this.state.years.map((value, index) => { return <option key={index} value={value}>{value}</option> })
                    }
                    </select> 
                </div>
                <div className="col-3">
                    <label for="startYearSelect">Stat</label>
                    <select class="form-select" id="startYearSelect" aria-label="start year select" onChange={(e) => { this.setState({selectedYear: e.target.value}) }}>
                    {
                        ['TOI', 'G', 'A', 'PIM', 'Hits', 'Shots', 'PPG', 'PPA', 'ShotPct', 'blocked'].map((value, index) => { return <option key={index} value={value}>{value}</option> })
                    }
                    </select> 
                </div>
               
            </div>
        )
    }
}
