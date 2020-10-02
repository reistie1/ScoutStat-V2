import React from 'react'
import {Line} from 'react-chartjs-2'
import '../../styles.css'

export default function PlayerContainer(props) {

    const dataGoals ={
        labels: props.stat['season'],
        datasets:[{
            label: 'Goals',
            data: props.stat.goals,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        },{
            label: 'Even Strength Goals',
            data: props.stat.goals_ev,
            fill: true,          // Don't fill area under the line
            borderColor: 'orange'
        },{
            label: 'Power Play Goals',
            data: props.stat.goals_pp,
            fill: true,          // Don't fill area under the line
            borderColor: 'blue'
        },{
            label: 'Short Handed Goals',
            data: props.stat.goals_sh,
            fill: true,          // Don't fill area under the line
            borderColor: 'yellow'
        },{
            label: 'Game Winning Goals',
            data: props.stat.goals_gw,
            fill: true,          // Don't fill area under the line
            borderColor: 'pink'
        }]
    }
    
    const dataAssists ={
        labels: props.stat.season,
        datasets:[{
            label: 'Assists',
            data: props.stat.assists,
            fill: true,          // Don't fill area under the line
            borderColor: 'blue'
        },{
            label: 'Even Strength Assists',
            data: props.stat.assists_ev,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        },{
            label: 'Short Handed Assists',
            data: props.stat.assist_sh,
            fill: true,          // Don't fill area under the line
            borderColor: 'orange'
        },{
            label: 'Powerplay Assists',
            data: props.stat.assist_pp,
            fill: true,          // Don't fill area under the line
            borderColor: 'purple'
        }]
    }

    const dataPlusMinus = {
        labels: props.stat.season,
        datasets:[{
            label: 'Plus/Minus',
            data: props.stat.plus_minus,
            fill: true,          // Don't fill area under the line
            borderColor: 'orange'
        }]
    }

    const dataPim = {
        labels: props.stat.season,
        datasets:[{
            label: 'Penalty In Minutes',
            data: props.stat.pen_min,
            fill: true,          // Don't fill area under the line
            borderColor: 'orange'
        }]
    }

    const dataPoints = {
        labels: props.stat.season,
        datasets:[{
            label: 'Points',
            data: props.stat.points,
            fill: true,          // Don't fill area under the line
            borderColor: 'orange'
        }]
    }

    const dataTakeAway = {
        labels: props.stat.season,
        datasets:[{
            label: 'Take Aways',
            data: props.stat.takeaways,
            fill: true,          // Don't fill area under the line
            borderColor: 'orange'
        }]
    }

    const dataGiveAway = {
        labels: props.stat.season        ,
        datasets:[{
            label: 'Give Aways',
            data: props.stat.giveaways,
            fill: true,          // Don't fill area under the line
            borderColor: 'orange'
        }]
    }

    const dataHit = {
        labels: props.stat.season        ,
        datasets:[{
            label: 'Total Hits',
            data: props.stat.hits,
            fill: true,          // Don't fill area under the line
            borderColor: 'orange'
        }]
    }

    const dataBlock = {
        labels: props.stat.season       ,
        datasets:[{
            label: 'Total Blocks',
            data: props.stat.blocks,
            fill: true,          // Don't fill area under the line
            borderColor: 'orange'
        }]
    }

    const dataIceTime = {
        labels: props.stat.season        ,
        datasets:[{
            label: 'Total Ice Time',
            data: props.stat.time_on_ice,
            fill: true,          // Don't fill area under the line
            borderColor: 'orange'
        }]
    }

    const dataAvgIceTime = {
        labels: props.stat.season       ,
        datasets:[{
            label: 'Average Ice Time',
            data: props.stat.time_on_ice_avg,
            fill: true,          // Don't fill area under the line
            borderColor: 'orange'
        }]
    }

    const dataFaceoffs = {
        labels: props.stat.season        ,
        datasets:[{
            label: 'Faceoff Wins',
            data:props.stat.faceoff_wins,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        },{
            label: 'Faceoff Losses',
            data: props.stat.faceoff_losses,
            fill: true,          // Don't fill area under the line
            borderColor: 'red'
        }]
    }

    const dataFaceoffPercent = {
        labels: props.stat.season        ,
        datasets:[{
            label: 'Faceoff Percentage',
            data: props.stat.faceoff_percentage,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }]
    }

    const dataShots = {
        labels: props.stat.season       ,
        datasets:[{
            label: 'Total Shot Attempts',
            data: props.stat.shots_attempted,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        },{
            label: 'Total Shots on Net',
            data: props.stat.shots,
            fill: true,          // Don't fill area under the line
            borderColor: 'blue'
        }]
    }

    const dataShotPercent = {
        labels: props.stat.season ,
        datasets:[{
            label: 'Shot Percentage',
            data: props.stat.shot_pct,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }]
    }
    
    return (
        <div className="chart-wrapper">
            <div className="player-stat-wrapper">
                <h4 className="player-stat-header">Productions</h4>
                    <div className="chart-container">
                        <Line data={dataGoals} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataAssists} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataPoints} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataPlusMinus} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
            </div>
            <div className="player-stat-wrapper">
                <h4 className="player-stat-header">Physicality</h4>
                    <div className="chart-container">
                        <Line data={dataBlock} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataHit} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
            </div>
            <div className="player-stat-wrapper">
                <h4 className="player-stat-header">Penalties</h4>
                <div className="chart-area">
                    <div className="chart-container">
                        <Line data={dataPim} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                </div>
            </div>
            <div className="player-stat-wrapper">
                <h4 className="player-stat-header">Giveaways/Takeaways</h4>
                    <div className="chart-container">
                        <Line data={dataTakeAway} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataGiveAway} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
            </div>
            <div className="player-stat-wrapper">
                <h4 className="player-stat-header">Miscelleanious</h4>
                    <div className="chart-container">
                        <Line data={dataShots} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataIceTime} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataFaceoffs} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
            </div>
        </div>
    )
}
