import React, {useState, useEffect} from 'react';
import dataService from '../../services/dataService';
import {useHistory} from 'react-router-dom';
import StatsContainer from '../StatsContainer/StatsContainer';
import TeamColors from '../../misc/TeamColors';
import TeamForm from '../TeamForm/TeamForm';
import ErrorNotice from '../../misc/errorNotice';


export default function TeamReports(props: any) {
    const history = useHistory();

    function getTeamsYearStats(year: string)
    {
        dataService.fetchTeamStatsByYearAsync(() => {}, year, localStorage.getItem("selectedTeamId"));
    }

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <h3 className="text-left p-3 col-4">Team Information</h3>
                    <a className="col-3 p-3 text-right" href="/" aria-label="home link">Go back to team selection</a>
                </div>
                <TeamForm onSelected={(year: string) => getTeamsYearStats(year)}/>                
            </div>
        </>
    )
}
