import TeamDataMetric from '../Interfaces/TeamDataMetric';


export default class TeamStatsData {
    MetricsList = Array<TeamDataMetric>();

    constructor()
    {
        this.MetricsList = new Array<TeamDataMetric>();
    }

    updateData(labels: string, data: string)
    {
        this.MetricsList.push({name: labels, value: data})
    }

    getMetric(searchLabel: string)
    {
        return this.MetricsList.filter((value: any) => { return value.name === searchLabel})[0];
    }

    getAllMetrics()
    {
        return this.MetricsList;
    }
}

