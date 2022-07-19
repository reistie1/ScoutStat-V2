import React from 'react'
import RankIndicator from '../RankIndicator/RankIndicator'
import '../../styles.css'

export default function PercentContainer(props: any) {
    return (
        <div className="percent-container">
            <h4>{props.name}</h4>
            <div className="d-flex justify-content-evenly align-items-center p-1">
                <h4>{props.value}</h4>
                <RankIndicator rank={props.rank} />
            </div>
            
            
        </div>
    )
}
