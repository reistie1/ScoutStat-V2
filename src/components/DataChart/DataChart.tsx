import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class DataChart extends Component<{data: any, name: string}, {}> {

    render() {
        console.log(this.props);
        const data = {
            labels: this.props.data.map((value: any) => {return value.season.toString()}),
            datasets: [
                {
                    label: this.props.name,
                    data: this.props.data.map((value: any) => {return value.dataPoint}),
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
