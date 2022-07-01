import React, {useEffect, useState} from 'react'
import './PlayerInfo.css';

export default function PlayerInfo(props) {    
    return (
        <div className="container col-12 p-0" style={{border: '1px solid gray', borderRadius: '6px'}}>
            <div className="container text-center">
                <h4 className="m-0 p-1 pt-2">{props.player.fullName}</h4>
            </div>
            <div className="name-decorators-top"></div>
            <div className="name-decorators-bottom"></div>
            <hr className="mt-0"/>
            <div className="container row m-0">
                <div className="container col-6">
                    <h6><strong>Birth Place: </strong>{props.player.birthCity}, {props.player.birthStateProvince}</h6>
                    <h6><b>Birth Date: </b>{props.player.birthDate}</h6>
                    <h6><b>Nationality: </b>{props.player.nationality}</h6>
                </div>
                <div className="container col-6">
                    <h6><b>Weight: </b>{props.player.weight} <span><b>Height: </b>{props.player.height}</span></h6>
                    <h6><b>Jersey Number: </b>#{props.player.primaryNumber}</h6>
                    <h6><b>Position: </b>{props.player.primaryPosition.name}, <span><b>Shoots: </b>{props.player.shootsCatches}</span></h6>
                </div> 
            </div>
        </div>
    )
}
