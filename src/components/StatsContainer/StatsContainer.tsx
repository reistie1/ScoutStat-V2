import React from 'react'
import RankIndicator from '../RankIndicator/RankIndicator'
import '../../styles.css'

export default function PercentContainer(props: any) {
    return (
        <div className="percent-container">
            <h5>{props.name}</h5>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h6>{props.value}</h6>
                <RankIndicator rank={props.rank} />
            </div>
            
            
        </div>
    )
}
