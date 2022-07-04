import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class StatChart extends Component {
    constructor(props: any)
    {
        super(props);
        this.state = {}
    }

    render() {
        //console.log(this.props)
        // const data = {
        //     labels: this.props.data.map(value => {return value.season.toString()}).sort(),
        //     datasets: [
        //         {
        //             label: this.props.name,
        //             data: this.props.data.map(value => {return value.dataPoint}).sort(),
        //             fill: true,
        //             backgroundColor: "rgba(75,192,192,0.2)",
        //             borderColor: "rgba(75,192,192,1)"
        //           },
               
        //     ],
        // }
        return (
            <div className="container col-4">
                {/* <Line data={data} height={250} width={300}/> */}
            </div>
        )
    }
}
