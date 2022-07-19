import React, { Component } from 'react'


type FormState = {
    years: string[];
}

export default class TeamForm extends Component<{onSelected: (year: string) => any}, FormState> {

    componentDidMount()
    {
        let yearsArray = [];
        for(var year = 1993; year <= new Date().getFullYear() - 1; year++)
        {
            yearsArray.push(year.toString());
        }

        this.setState({years: yearsArray});
    }

    clickHandler(e: any, {onSelected}: any)
    {
        e.preventDefault();
        onSelected(e.target.value+""+(parseInt(e.target.value) + 1).toString());
    }

    render() {
        return (
            <>
                <form className="col-3 p-0">
                    <label className="col-12 p-0 m-0">Select Year</label>
                    <select className="col-12" onChange={(e) => {this.clickHandler(e, this.props)}}>
                        {
                            this.state?.years.map((value, index) => { return <option key={index} value={value}>{value}</option> })
                        }
                    </select>
                </form>
            </>
        )
    }
}
