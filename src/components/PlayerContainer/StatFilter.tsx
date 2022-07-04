import React, { Component } from 'react'

export default class StatFilter extends Component {
    constructor(props: any)
    {
        super(props);
        this.state = {
            years: [],
            startYear: 'N/A',
            endYear: 'N/A',
        }
    }
    
    componentDidMount()
    {
        let yearArray = ['N/A'];
        // for(var year = 1993; year <= new Date().getFullYear() - 1; year++)
        // {
        //     yearArray.push(year);
        // }

        this.setState({years: yearArray});
    }

    // componentDidUpdate(prevProps, prevState)
    // {
    //     if(this.state.startYear !== prevState.startYear || this.state.endYear !== prevState.endYear)
    //     {
    //         const {startYear, endYear} = this.state;
    //         if(startYear > endYear)
    //         {
    //             window.alert("Start year must come before end year.")
    //         }
    //         else if(startYear === endYear)
    //         {
    //             window.alert("Start and end years must not be the same");
    //         }
    //         else
    //         {
    //             this.props.onUpdate({start: this.state.startYear, end: this.state.endYear});
    //         }
    //     }
    // }

    render() {
        return (
            <div className="container col-12 d-flex flex-column justify-content-center p-0 pt-4">
                <div className="container row justify-content-between p-0">
                    <h6>Select Range</h6>
                    <div className="col-6 mb-4">
                        <label htmlFor="startYearSelect">Start Year</label>
                        {/* <select className="form-select" id="startYearSelect" aria-label="start year select" onChange={(e) => { this.setState({startYear: e.target.value}) }}>
                        {
                            this.state.years.map((value, index) => { return <option key={index} value={value}>{value}</option> })
                        }
                        </select>  */}
                    </div>
                    <div className="col-6">
                        <label htmlFor="startYearSelect">End Year</label>
                        {/* <select className="form-select" id="startYearSelect" aria-label="start year select" onChange={(e) => { this.setState({endYear: e.target.value}) }}>
                        {
                            this.state.years.map((value, index) => { return <option key={index} value={value}>{value}</option> })
                        }
                        </select>  */}
                    </div>
                </div>
            </div>
        )
    }
}
