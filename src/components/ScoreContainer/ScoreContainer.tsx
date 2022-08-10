import React, {useState} from 'react'

export default function ScoreContainer(props: any) {

    return (
        <>
            <div className="score-item" style={{border: '1px solid gray', borderRadius: '14px'}}>
              <div className="home">
                <div className="home-top">
                    <p>{props.home.team.name}</p>
                    <p>{`${props.home.leagueRecord.wins} - ${props.home.leagueRecord.losses} - ${props.home.leagueRecord.ot ?? 0} `}</p>  
                </div>
                <div className="home-bottom">
                    <h5>{props.home.score}</h5>
                </div>
              </div>
              <div className="away">
                <div className="away-top">
                    <p>{props.away.team.name}</p>
                    <p>{`${props.away.leagueRecord.wins} - ${props.away.leagueRecord.losses} - ${props.away.leagueRecord.ot ?? 0} `}</p>  
                </div>
                <div className="away-bottom">
                    <h5>{props.away.score}</h5>
                </div>
              </div>
          </div>
        </>
    )
}
