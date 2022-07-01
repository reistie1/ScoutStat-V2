import React, {useEffect, useState} from 'react'
import './PlayerInfo.css';

export default function PlayerInfo(props) {    
    return (
        <div className="container col-6" style={{border: '1px solid black', borderRadius: '6px'}}>
            <div class="row">
                <h3 className="player-name">{props.player.fullName}</h3>
            </div>
            <hr/>
            
            <div className="container row">
                <div className="container col-sm-6">
                    <h6><b>Birth Place: </b>{props.player.birthCity}, {props.player.birthStateProvince}</h6>
                    <h6><b>Birth Date: </b>{props.player.birthDate}</h6>
                    <h6><b>Nationality: </b>{props.player.nationality}</h6>
                </div>
                <div className="container col-sm-6">
                    <h6><b>Weight: </b>{props.player.weight} <span><b>Height: </b>{props.player.height}</span></h6>
                    <h6><b>Jersey Number: </b>#{props.player.primaryNumber}</h6>
                    <h6><b>Position: </b>{props.player.primaryPosition.name}, <span><b>Shoots: </b>{props.player.shootsCatches}</span></h6>
                </div> 
            </div>
        </div>
    )
}
