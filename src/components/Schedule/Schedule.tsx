import React from 'react'
// import {useHistory} from 'react-router-dom'
// import Axios from 'axios'
// import ScoreContainer from '../ScoreContainer/ScoreContainer'
// import SearchIcon from '@material-ui/icons/Search';
// import Footer from '../Footer/Footer'
// import Sidebar from '../Sidebar/Sidebar'
// import ErrorNotice from '../../misc/errorNotice'
import '../../styles.css'

export default function Schedule() {
    // const [sDate, setSDate] = useState('')
    // const [eDate, setEDate] = useState('')
    // const [team, setTeam] = useState('')
    // const [stats, setStats] = useState([])
    // const [error, setError] = useState()
    // const history = useHistory()
    // const axiosConfig = {
    //     headers:{
    //         "Content-Type": "application/json;charset=UTF-8"
    //     }
    // }

    // const getSchedule = async () => {
    //     try{
    //         const startDate = sDate
    //         const endDate = eDate
    //         const payload = {team, startDate, endDate}
    //         const datas = await Axios.post('http://localhost:5000/players/schedules', payload, axiosConfig)
    //         setStats(datas.data)
    //     }catch(e){
    //         e.response.data.msg && setError(e.response.data.msg)
    //     }
    // }

    // useEffect( () => {
    //     let token = localStorage.getItem("token")
    //     if(!token) history.push('/login')

    // const getScores = async () =>{
    //     try{
    //         const startDate = "2020-08-03"
    //         const endDate = "2020-08-06"
    //         const payload = {team, startDate, endDate}
    //         const datas = await Axios.post('http://localhost:5000/players/schedules', payload, axiosConfig)
    //         setStats(datas.data)
    //     }catch(e){
    //         e.response.data.msg && setError(e.response.data.msg)
    //     }
    // }
    // getScores()
    //   }, [axiosConfig, history, team]);


    // const submitFunc = async (e) => {
    //     e.preventDefault()
    //     getSchedule()
    // }

    // const GameList = (item, index, array) =>(
    //     <div key={index} className="schedule-wrapper">
    //         <h4 className="schedule-title">{item.date}</h4>
    //         <div className="game-container">
    //             {item.games.map((other,index) => (
    //                 <ScoreContainer key={other.gamePk} away={other.teams.away} home={other.teams.home}/>
    //             ))}
    //         </div>
    //     </div>
    // )

    return (
        <>
            {/* <div className="page">
                <Sidebar/>
                    <div className="main-container">
                    {error && <ErrorNotice message={error} clearError={()=> setError(undefined)} />}

                        <div className="searchbar">
                            <form onSubmit={submitFunc}>
                                <input type="date" name="start-date" onChange={e=> setSDate(e.target.value)}/>
                                <input type="date" name="end-date" onChange={e=> setEDate(e.target.value)}/>
                                <input type="text" style={{padding: '0.2rem'}} name="team" placeholder="Enter a team" onChange={e=> setTeam(e.target.value)}/>
                                <button><SearchIcon/></button>
                            </form>
                        </div>
                        <div>
                            {stats.map(GameList)}
                        </div>
                    </div>
            </div>
            <Footer/> */}
        </>
    )
}
