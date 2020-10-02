import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import PlayerInfo from '../layout/PlayerInfo'
import PlayerContainer from '../layout/PlayerContainer'
import GoalieContainer from '../layout/GoalieContainer'
import Axios from 'axios'
import Sidebar from '../layout/Sidebar'
import Footer from '../layout/Footer'
import SearchIcon from '@material-ui/icons/Search'
import ErrorNotice from '../../misc/errorNotice'
import '../../styles.css'

export default function TeamReports(props) {
    const [name, SetName] = useState('')
    const [playerOption, SetPlayerOption] = useState('player')
    const [player, setPlayer] = useState(null)
    const [stats, setStats] = useState({})
    const [error, setError] = useState()
    const history = useHistory()

    useEffect(() => {
        let token = localStorage.getItem("token")
        if(!token) history.push('login')
    })

    const submitData = async (e) => {
        e.preventDefault()
        const axiosConfig = {
            headers:{
                "Content-Type": "application/json;charset=UTF-8"
            }
        }

        const payload = {name, playerOption}

        try{
            const datas = await Axios.post("http://localhost:5000/players/player", payload, axiosConfig)
            setPlayer(datas.data.info)
            setStats(datas.data.obj)
        }catch(e){
            e.response.data.msg && setError(e.response.data.msg)
        }
    }

    return (
        <>
            <div className="page">
                <Sidebar/>
                    <div className="main-container">
                    {error && <ErrorNotice message={error} clearError={()=> setError(undefined)} />}
                        <div className="searchbar">
                            <form onSubmit={submitData}>
                                <select value={playerOption} onChange={(e) => SetPlayerOption(e.target.value)}>
                                    <option value="goalie">Goalie</option>
                                    <option value="player">Player</option>
                                </select>
                                <input type="text" name="player" onChange={(e) => SetName(e.target.value)}/>
                                <button><SearchIcon/></button>
                            </form>
                        </div>
                        <div>
                            { player === null ? null : <PlayerInfo info={player}/> }
                        </div>
                        <div className="career-container">
                            {playerOption === 'player' ?
                                stats !== undefined ? <PlayerContainer  stat={stats}/>: stats
                            :
                                stats !== undefined ? <GoalieContainer  stat={stats}/>: stats
                            }
                        </div>
                    </div>
            </div>
            <Footer/>
        </>
    )
}
