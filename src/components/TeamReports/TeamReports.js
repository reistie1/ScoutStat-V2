import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Doughnut} from 'react-chartjs-2'
import Axios from 'axios'
import StatsContainer from '../StatsContainer/StatsContainer'
import TeamColors from '../../misc/TeamColors'
import SearchIcon from '@material-ui/icons/Search'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import ErrorNotice from '../../misc/errorNotice'


export default function TeamReports() {
    const [season, setSeason] = useState('')
    const [team, setTeam] = useState('')
    const [stats, setStats] = useState({})
    const [splits, setSplits] = useState({})
    const [teamstat, setTeamStat] = useState({})
    const [color, setColor] = useState({})
    const [error, setError] = useState()
    const history = useHistory()

    const dataFaceoffs = {
        labels: ['FOT','FOW','FOL'],
        datasets:[{
            label: 'Faceoffs Metrics',
            data: [stats.faceOffsTaken, stats.faceOffsWon, stats.faceOffsLost],
            backgroundColor: ['#108dc7', '#ef8e38', '#6A82FB'],
            borderColor: 'black'
        }]
    }

    const dataWins = {
        labels:['winScoreFirst', 'winOppScoreFirst', 'winLeadFirstPer', 'winLeadSecondPer', 'winOutshootOpp', 'winOutshotByOpp'],
        datasets:[{
            label: 'Win ratios',
            data: [stats.winScoreFirst,stats.winOppScoreFirst, stats.winLeadFirstPer, stats.winLeadSecondPer, stats.winOutshootOpp, stats.winOutshotByOpp],
            backgroundColor: ['#FC5C7D','#c94b4b','#4b134f','#23074d','#302b63','#667db6'],
            borderColor: 'black'
        }]
    }

    const dataPP = {
        labels: ['ppG', 'ppGA', 'ppOpp'],
        datasets:[{
            label: 'Power Play Totals',
            data: [stats.powerPlayGoals, stats.powerPlayGoalsAgainst, stats.powerPlayOpportunities],
            backgroundColor: ['#DB5A7C', '#736BDB', '#4AC1F0'],
            borderColor: 'black'
        }]
    }

    const submitForm = async (e) =>{
        e.preventDefault()
        const axiosConfig = {
            headers:{
                "Content-Type": "application/json;charset=UTF-8"
            }
        }

        const payload = {season, team}

        try{
            const datas = await Axios.post('http://localhost:5000/players/team', payload, axiosConfig)
            setStats(datas.data.stat)
            setTeamStat(datas.data.team)
            setSplits(datas.data.stat_rank)
        }catch(e){
            e.response.data.msg && setError(e.response.data.msg)
        }
    }

    useEffect(() => {
        // let token = localStorage.getItem("token")
        // if(!token) history.push('login')
        const value = teamstat.name === undefined ? 'calgary flames' : teamstat.name.toLowerCase()
        setColor(TeamColors[value])
    })
    
    return (
        <>
        <div className="page">
            <Sidebar/>
                <div className="main-container">
                {error && <ErrorNotice message={error} clearError={()=> setError(undefined)} />}

                    <div className="searchbar">
                        <form onSubmit={submitForm}>
                            <select value={season} onChange={(e)=> setSeason(e.target.value)}>
                                <option value=''>Select Season</option>
                                <option value="20192020">2019-2020</option>
                                <option value="20182019">2018-2019</option>
                                <option value="20172018">2017-2018</option>
                                <option value="20162017">2016-2017</option>
                                <option value="20152016">2015-2016</option>
                                <option value="20142015">2014-2015</option>
                                <option value="20132014">2013-2014</option>
                                <option value="20122013">2012-2013</option>
                                <option value="20112012">2011-2012</option>
                                <option value="20102011">2010-2011</option>
                                <option value="20092010">2009-2010</option>
                                <option value="20082009">2008-2009</option>
                                <option value="20072008">2007-2008</option>
                                <option value="20062007">2006-2007</option>
                                <option value="20052006">2005-2006</option>
                                <option value="20042005">2004-2005</option>
                                <option value="20032004">2003-2004</option>
                                <option value="20022003">2002-2003</option>
                                <option value="20012002">2001-2002</option>
                                <option value="20002001">2000-2001</option>
                                <option value="19992000">1999-2000</option>
                                <option value="19981999">1998-1999</option>
                            </select>
                            <input type="text" name="team" onChange={(e)=>setTeam(e.target.value)}/>
                            <button><SearchIcon/></button>
                        </form>
                    </div>

                    <div className="team-container">
                        <div className="record-container">
                            <h2 style={{backgroundColor: color['color1'], color: 'white'}}>{teamstat.name}</h2>
                            <table>
                                <thead style={{backgroundColor: color['color1'], color: 'white'}}>
                                    <tr>
                                        <th>Games Played</th>
                                        <th>Wins</th>
                                        <th>Losses</th>
                                        <th>Overtime</th>
                                        <th>Points</th>
                                    </tr>
                                </thead>
                                    <tbody style={{backgroundColor: color['color2'], color: 'white'}}>
                                        <tr>
                                            <td>{stats.gamesPlayed}</td>
                                            <td>{stats.wins}</td>
                                            <td>{stats.losses}</td>
                                            <td>{stats.ot}</td>
                                            <td>{stats.pts}</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>{splits.wins}</td>
                                            <td>{splits.losses}</td>
                                            <td>{splits.ot}</td>
                                            <td>{splits.pts}</td>
                                        </tr>
                                    </tbody>
                            </table>
                        </div>
                        <div className="faceoff-container">
                            <h5 className="teamstat-title" style={{backgroundColor: color['color1']}}>Draws</h5>
                            <Doughnut data={dataFaceoffs} width={250} height={170}/>
                        </div>
                        <div className="powerplay-container">
                            <h5 className="teamstat-title" style={{backgroundColor: color['color2']}}>Specialty Teams</h5>
                            <Doughnut data={dataPP} width={250} height={170}/>
                        </div>
                        <div className="wins-container">
                            <h5 className="teamstat-title" style={{backgroundColor: color['color2']}}>Wins</h5>
                            <Doughnut data={dataWins} width={250} height={150}/>
                        </div>
                        <div className="percent-wrapper">
                            <StatsContainer className="team-item" name="Shooting Percentage" value={stats.shootingPctg} color={color['color1']} rank={splits.shootingPctRank}/>
                            <StatsContainer className="team-item" name="Save Percentage" value={stats.savePctg} color={color['color2']} rank={splits.savePctRank}/>
                            <StatsContainer className="team-item" name="Power-play Percentage" value={stats.powerPlayPercentage} color={color['color1']} rank={splits.powerPlayPercentage}/>
                            <StatsContainer className="team-item" name="Penalty Kill Percentage" value={stats.penaltyKillPercentage} color={color['color2']} rank={splits.penaltyKillPercentage}/>
                            <StatsContainer className="team-item" name="Face-off Percentage" value={stats.ptPctg} color={color['color1']} rank={splits.ptPctg}/>
                            <StatsContainer className="team-item" name="Face-off Win Percentage" value={stats.faceOffWinPercentage} color={color['color2']} rank={splits.faceOffWinPercentage}/>
                            <StatsContainer className="team-item" name="Goals Per Game" value={stats.goalsPerGame} color={color['color1']} rank={splits.goalsPerGame}/>
                            <StatsContainer className="team-item" name="Goals Against Per Game" value={stats.goalsAgainstPerGame} color={color['color2']} rank={splits.goalsAgainstPerGame}/>
                        </div>
                    </div>
                </div>
        </div>
        <Footer/>
        </>
    )
}
