import PlayerMetrics from '../Interfaces/PlayerMetrics';
import { DataMetric } from '../Interfaces/DataMetric';

export default class PlayerStatsData {
    MetricsList = Array<PlayerMetrics>();

    constructor()
    {
        this.MetricsList = new Array<PlayerMetrics>();
    }

    updateData(labels: string, data: DataMetric)
    {
        let dataPoints = this.getMetric(labels);

        if(dataPoints === undefined)
        {
            this.MetricsList.push({label: labels, dataPoints: [data]})
        }
        else
        {
            dataPoints.dataPoints.push(data);
        }
    }

    getMetric(searchLabel: string)
    {
        return this.MetricsList.filter((value: PlayerMetrics) => { return value.label === searchLabel})[0];
    }

    getAllMetrics()
    {
        return this.MetricsList;
    }
}

