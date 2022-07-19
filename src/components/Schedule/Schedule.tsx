import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import ScoreContainer from '../ScoreContainer/ScoreContainer'
import ErrorNotice from '../../misc/errorNotice'
import SearchIcon from '@material-ui/icons/Search';
import '../../styles.css'

export default function Schedule() {
    // const [error, setError] = useState()
    // const history = useHistory()
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    
    const submitFunc = async (e: any) => {
        e.preventDefault()
    }

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
            <div className="page">
                    <div className="main-container">

                        <div className="searchbar">
                            <form onSubmit={submitFunc} className="col-12">
                            <div className="col-12 d-flex row">
                                    <label htmlFor="start-date">Start Date</label>
                                    <input className="form-select" type="date" name="start-date" onChange={(e: any) => setStartDate(e.target.value)}/>
                                </div>
                                <div className="col-12 d-flex row">
                                    <label htmlFor="end-date">Start Date</label>
                                    <input type="date" name="end-date" onChange={(e: any) => setEndDate(e.target.value)}/>
                                </div>
                               
                                {/* <input type="text" style={{padding: '0.2rem'}} name="team" placeholder="Enter a team" onChange={e=> setTeam(e.target.value)}/> */}
                                <button><SearchIcon/></button>
                            </form>
                        </div>
                        <div>
                        </div>
                    </div>
            </div>
        </>
    )
}
