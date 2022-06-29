import React, {useEffect, useState} from 'react'
import TeamColors from '../../misc/TeamColors'

export default function PlayerInfo(props) {
    const [color, setColor] = useState({})

    useEffect(()=>{
        // setColor(TeamColors[props.info['team'].toLowerCase()])
    }, [props])
    const keys = Object.keys(props.info)
    return (
        <div className="player-container">
            {/* <div className="player-pic" style={{backgroundColor: color['color2']}}>
                <img src={props.info.picture} alt="headshot"/>
            </div>
            <div className="player-info" style={{backgroundColor: color['color1']}}>
                <div style={{backgroundColor: color['color2']}}>
                    <h5>{keys[0].charAt(0).toUpperCase()+keys[0].slice(1)}</h5>
                    <h6>{props.info.name}</h6>
                </div>
                <div style={{backgroundColor: color['color2']}}>
                    <h5>{keys[1].charAt(0).toUpperCase()+keys[1].slice(1)}</h5>
                    <h6>{props.info.position}</h6>
                </div>
                <div style={{backgroundColor: color['color2']}}>
                    <h5>{keys[2].charAt(0).toUpperCase()+keys[2].slice(1)}</h5>
                    <h6>{props.info.shoots}</h6>
                </div>
                <div style={{backgroundColor: color['color2']}}>
                    <h5>{keys[3].charAt(0).toUpperCase()+keys[3].slice(1)}</h5>
                    <h6>{props.info.weight}</h6>
                </div>
                <div style={{backgroundColor: color['color2']}}>
                    <h5>{keys[4].charAt(0).toUpperCase()+keys[4].slice(1)}</h5>
                    <h6>{props.info.height}</h6>
                </div>
                <div style={{backgroundColor: color['color2']}}>
                    <h5>{keys[6].charAt(0).toUpperCase()+keys[6].slice(1)}</h5>
                    <h6>{props.info.age}</h6>
                </div> */}
                
                {/* <table>
                    <thead>
                        <tr>
                            <th>{keys[0]}</th>
                            <th>{keys[1]}</th>
                            <th>{keys[2]}</th>
                            <th>{keys[3]}</th>
                            <th>{keys[4]}</th>
                            <th>{keys[6]}</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>{props.info.name}</td>
                            <td>{props.info.position}</td>
                            <td>{props.info.shoots}</td>
                            <td>{props.info.weight}</td>
                            <td>{props.info.height}</td>
                            <td>{props.info.age}</td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table> */}
            {/* </div> */}
        </div>
    )
}
