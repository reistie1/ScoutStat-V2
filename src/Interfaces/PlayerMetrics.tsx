import { DataMetric } from "./DataMetric";

export default interface PlayerMetrics
{
    dataPoints: DataMetric[],
    label: string,
}