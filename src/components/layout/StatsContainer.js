import React from 'react'
import '../../styles.css'

export default function PercentContainer(props) {
    return (
        <div className="percent-container">
            <h5 style={{backgroundColor: props.color}}>{props.name}</h5>
            <h6>{props.value}</h6>
            <p className="rank_badge">{props.rank}</p>
        </div>
    )
}
