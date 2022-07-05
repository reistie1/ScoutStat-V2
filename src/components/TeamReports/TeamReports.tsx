import React, {useState, useEffect} from 'react'
import dataService from '../../services/dataService'
import {useHistory} from 'react-router-dom'
import StatsContainer from '../StatsContainer/StatsContainer'
import TeamColors from '../../misc/TeamColors'
import SearchIcon from '@material-ui/icons/Search'
import ErrorNotice from '../../misc/errorNotice'


export default function TeamReports() {
    const history = useHistory();

    useEffect(() => {
        dataService.fetchTeamStatsByYearAsync(() => {}, 2012);
    }, []);

    return (
        <>
            <div className="page">
                <div className="main-container">

                   
                </div>
            </div>
        </>
    )
}
