import React from 'react'
import {Line} from 'react-chartjs-2'
import '../../styles.css'

export default function GoalieContainer(props) {

    const dataGamesPlayed = {
        labels: props.stat.season,
        datasets:[{
            label: 'Games Played',
            data: props.stat.games_goalie,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        },{
            label: 'Games Started',
            data: props.stat.starts_goalie,
            fill: true,          // Don't fill area under the line
            borderColor: 'blue'
        }]
    }
    
    const dataSuccess = {
        labels: props.stat.season,
        datasets:[{
            label: 'Wins',
            data: props.stat.wins_goalie,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        },{
            label: 'Losses',
            data: props.stat.losses_goalie,
            fill: true,          // Don't fill area under the line
            borderColor: 'blue'
        },{
            label: 'Ties Plus Overtime Losses',
            data: props.stat.ties_goalie,
            fill: true,          // Don't fill area under the line
            borderColor: 'orange'
        }
    ]
    }
    
    const dataAgainst = {
        labels: props.stat.season,
        datasets:[{
            label: 'Goals Against',
            data: props.stat.goals_against,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        },{
            label: 'Shots Against',
            data: props.stat.shots_against,
            fill: true,          // Don't fill area under the line
            borderColor: 'blue'
        }]
    }

    const dataSaves = {
        labels: props.stat.season,
        datasets:[{
            label: 'Total Saves',
            data: props.stat.saves,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }]
    }

    const dataSavePrcnt = {
        labels: props.stat.season,
        datasets:[{
            label: 'Save Percentage',
            data: props.stat.save_pct,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }]
    }

    const dataGoalsAgainst = {
        labels: props.stat.season,
        datasets:[{
            label: 'Goals Against Average',
            data: props.stat.goals_against_avg,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        },{
            label: 'Adjusted Goals Against Average',
            data: props.stat.goals_against_avg_adjusted,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }
    ]
    }
    
    const dataStarts = {
        labels: props.stat.season,
        datasets:[{
            label: 'Quality Starts',
            data: props.stat.quality_starts_goalie,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        },{
            label: 'Really Bad Starts',
            data: props.stat.really_bads_starts_goalie,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }
    ]
    }

    const dataStartPrcnt = {
        labels: props.stat.season,
        datasets:[{
            label: 'Quality Start Percentage',
            data: props.stat.quality_start_goalie_pct,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }]
    }
    const dataGoals = {
        labels: props.stat.season        ,
        datasets:[{
            label: 'Total Goals',
            data: props.stat.goals,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }
    ]
    }

    const dataAssists = {
        labels: props.stat.season        ,
        datasets:[{
            label: 'Total Assists',
            data: props.stat.assists,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }]
    }
    
    const dataPoints = {
        labels: props.stat.season        ,
        datasets:[{
            label: 'Total Points',
            data: props.stat.points,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }]
    }
    
    const dataPim = {
        labels: props.stat.season        ,
        datasets:[{
            label: 'Penalities in Minutes',
            data: props.stat.pen_min,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }]
    }
    const dataMins = {
        labels: props.stat.season,
        datasets:[{
            label: 'Total Minutes',
            data: props.stat.min_goalie,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }]
    }
    const dataShutouts = {
        labels: props.stat.season,
        datasets:[{
            label: 'Shutouts',
            data: props.stat.shutouts,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }]
    }
    const dataPointShare = {
        labels: props.stat.season,
        datasets:[{
            label: 'Point Shares',
            data: props.stat.gps,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }]
    }
    const dataGoalsAgnstPrcnt = {
        labels: props.stat.season,
        datasets:[{
            label: 'Goals Against Percentage Plus Minus',
            data: props.stat.ga_pct_minus,
            fill: true,          // Don't fill area under the line
            borderColor: 'green'
        }]
    }

    return (
        <div className="chart-wrapper">
            <div className="player-stat-wrapper">
                <h4 className="player-stat-header">Point Production</h4>
                    <div className="chart-container">
                        <Line data={dataGoals} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataSuccess} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataAssists} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataPoints} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataPointShare} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
            </div>
            <div className="player-stat-wrapper">
                <h4 className="player-stat-header">Save Totals</h4>
                    <div className="chart-container">
                        <Line data={dataSaves} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataSavePrcnt} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
            </div>
            <div className="player-stat-wrapper">
                <h4 className="player-stat-header">Game Statistics</h4>
                    <div className="chart-container">
                        <Line data={dataGamesPlayed} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataMins} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataShutouts} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataStarts} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataStartPrcnt} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
            </div>
            <div className="player-stat-wrapper">
                <h4 className="player-stat-header">Penalties</h4>
                    <div className="chart-container">
                        <Line data={dataPim} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
            </div>
            <div className="player-stat-wrapper">
                <h4 className="player-stat-header">Points Against</h4>
                    <div className="chart-container">
                        <Line data={dataGoalsAgainst} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataGoalsAgnstPrcnt} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
                    <div className="chart-container">
                        <Line data={dataAgainst} options={{ maintainAspectRatio: true }} height={250}/>
                    </div>
            </div>
        </div>
    )
}
