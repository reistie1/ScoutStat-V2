import React, { Component } from 'react'

type IndicatorState = {
    colour: string
}

export default class RankIndicator extends Component<{rank: string}, IndicatorState> {
    
    componentDidMount()
    {
        const {rank} = this.props;
        let colour = '';
        let ranks = parseInt(rank.slice(0, rank.length - 2));

        console.log(ranks, rank);

        if(ranks <= 10)
        {
            colour = "green";
        }
        else if(ranks > 10 && ranks <= 20)
        {
            colour = "orange";
        }
        else
        {
            colour = "red";
        }

        this.setState({colour: colour});
    }
    

    render() {
        return (
            <div style={{backgroundColor: this.state?.colour, padding: '0.5rem', height: '40px', borderRadius: '50%', textAlign: 'center', color: 'white', lineHeight: 0}}>
                {
                    this.props.rank !== '0' ? <p>{this.props.rank}</p> : null
                }
            </div>
        )
    }
}
