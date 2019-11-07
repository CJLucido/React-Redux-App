import React from 'react'


function StateCard(props){
    return (
        <div>
            <h1>{props.stateName}</h1>
            <h2>{props.titleDR}</h2>
            <p>Began: {props.beganDate}</p>
            <p>Closed: {props.closeDate}</p>
        </div>
    )
}

export default StateCard