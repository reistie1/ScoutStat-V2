import React, {useEffect, useState} from 'react'
import './PlayerInfo.css';

export default function PlayerInfo(props) {    
    return (
        <div className="info-container">
           <h3 className="player-name">{props.player.fullName}</h3>
           {/* <div className="info-item-container">
            <h6><b>Birth Place: </b>{props.player.birthCity}, {props.player.birthStateProvince}</h6>
            <h6><b>Birth Date: </b>{props.player.birthDate}</h6>
            <h6><b>Nationality: </b>{props.player.nationality}</h6>
           </div>
           <div className="info-item-container">
            <h6><b>Weight: </b>{props.player.weight} <span><b>Height: </b>{props.player.height}</span></h6>
            <h6><b>Jersey Number: </b>#{props.player.primaryNumber}</h6>
            <h6><b>Position: </b>{props.player.primaryPosition.name}</h6>
            <h6><b>Shoots: </b>{props.player.shootsCatches}</h6>
           </div> */}
            <div style={{borderBottom: '10px solid red', borderRight: "10px solid transparent","position": "relative", "right": 0, "top": 0, zIndex: 0, height: '100%', width: '25%'}}>

            </div>
        </div>
    )
}
