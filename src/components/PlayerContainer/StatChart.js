import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

export default class StatChart extends Component {
    constructor(props)
    {
        super(props);
        this.state = {}
    }


    render() {
        const data = {
            labels: ['20112012', '20122013', '20132014', '20142015'],
            datasets: [
                {
                    label: "First dataset",
                    data: [10,39,55,32],
                    fill: true,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)"
                  },
               
            ],
        }
        return (
            <div className="container col-4">
                <Line data={data} height={250} width={300}/>
            </div>
        )
    }
}
