import React from 'react'
import '../../styles.css'

export default function PercentContainer(props: any) {
    return (
        <div style={{width: '200px'}}>
            <h5>{props.name}</h5>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h6>{props.value}</h6>
                {
                    props.rank !== '0' ? <p>{props.rank}</p> : null
                }
            </div>
            
            
        </div>
    )
}
