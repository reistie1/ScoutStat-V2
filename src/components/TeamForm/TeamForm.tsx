import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';

type FormState = {
    years: string[];
}

export default class TeamForm extends Component<{onSelected: (year: string) => void}, FormState> {

    componentDidMount()
    {
        let yearsArray = [];
        for(var year = 1993; year <= new Date().getFullYear() - 1; year++)
        {
            yearsArray.push(year.toString());
        }

        this.setState({years: yearsArray});
    }

    clickHandler(e: any)
    {
        this.props.onSelected(e.target.value+""+(parseInt(e.target.value)+1).toString());
    }

    render() {
        return (
            <>
                <form className="container col-4 p-3">
                    <label className="col-9 p-0 m-0">Select Year</label>
                    <select className="col-10">
                        {
                            this.state?.years.map((value, index) => { return <option key={index} value={value}>{value}</option> })
                        }
                    </select>
                    <button className="col-2" onClick={this.clickHandler}><SearchIcon/></button>
                </form>
            </>
        )
    }
}
