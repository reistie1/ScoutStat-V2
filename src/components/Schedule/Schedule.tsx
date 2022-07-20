import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import ScoreContainer from '../ScoreContainer/ScoreContainer'
import ErrorNotice from '../../misc/errorNotice'
import SearchIcon from '@material-ui/icons/Search';
import dataService from '../../services/dataService';
import '../../styles.css'

export default function Schedule() {
    // const [error, setError] = useState()
    // const history = useHistory()
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [data, setData] = useState([]);
    
    const submitFunc = async (e: any) => {
        e.preventDefault();
        dataService.fetchScheduleDataAsync((data: any) => { setData(data); }, {startDate: startDate, endDate: endDate});
    }

    console.table(data);

    return (
        <>
            <div className="container p-2 pt-5" style={{height: '625px', overflowX: 'scroll'}}>
                <form onSubmit={submitFunc} className="col-9 d-flex align-items-end">
                    <div className="col-4">
                        <label className="mb-0 pl-1" htmlFor="start-date">Start Date</label>
                        <input className="form-select" type="date" name="start-date" onChange={(e: any) => setStartDate(e.target.value)}/>
                    </div>
                    <div className="col-4">
                        <label className="mb-0 pl-1" htmlFor="end-date">End Date</label>
                        <input className="form-select" type="date" name="end-date" onChange={(e: any) => setEndDate(e.target.value)}/>
                    </div> 
                    <div className="p-1" style={{backgroundColor: 'blue', color: 'white', borderRadius: '4px'}}>
                        <button><SearchIcon/></button>
                    </div>                   
                </form>
                {
                    data.map((value: any, index: number) => {
                        return value.games.map((innerValue: any, innerIndex: number) => {
                           return <ScoreContainer home={innerValue.teams?.home} away={innerValue.teams?.away}/> 
                        })
                    })
                }
            </div>
        </>
    )
}
