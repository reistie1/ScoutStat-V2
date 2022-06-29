import React, {useState, useEffect} from 'react'
import TeamColors from '../../misc/TeamColors'

export default function ScoreContainer(props) {
    const [awayColor, setAwayColor] = useState({})
    const [homeColor, setHomeColor] = useState({})

    useEffect(()=>{
        setHomeColor(TeamColors[props.home.team.name.toLowerCase()])
        setAwayColor(TeamColors[props.away.team.name.toLowerCase()])
    }, [props])

    return (
        <>
          <div className="score-item">
              <div className="home">
                <div className="home-top" style={{backgroundColor: homeColor['color1'], color: 'white'}}>
                    <p>{props.home.team.name}</p>
                    <p>{`${props.home.leagueRecord.wins} - ${props.home.leagueRecord.losses} - ${props.home.leagueRecord.ot ?? 0} `}</p>  
                </div>
                <div className="home-bottom" style={{backgroundColor: homeColor['color2'], color: 'white'}}>
                    <h5>{props.home.score}</h5>
                </div>
              </div>
              <div className="away">
                <div className="away-top" style={{backgroundColor: awayColor['color1'], color: 'white'}}>
                    <p>{props.away.team.name}</p>
                    <p>{`${props.away.leagueRecord.wins} - ${props.away.leagueRecord.losses} - ${props.away.leagueRecord.ot} `}</p>  
                </div>
                <div className="away-bottom" style={{backgroundColor: awayColor['color2'], color: 'white'}}>
                    <h5>{props.away.score}</h5>
                </div>
              </div>
          </div>
        </>
    )
}
