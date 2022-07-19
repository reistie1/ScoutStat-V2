import TeamDataMetric from '../Interfaces/TeamDataMetric';


export default class TeamStatsData {
    MetricsList = Array<TeamDataMetric>();

    constructor()
    {
        this.MetricsList = new Array<TeamDataMetric>();
    }

    updateData(labels: string, data: string)
    {
        this.MetricsList.push({name: labels, value: data, rank: '0'})
    }

    updateRank(labels: string, data: string)
    {
        if(labels.indexOf("Rank") >= 0)
        {
            labels = labels.slice(0, labels.length - 4) + 'g';
        }
        
        let metric = this.getMetric(labels);

        if(metric !== undefined)
        {
            metric.rank = data;
        }
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

