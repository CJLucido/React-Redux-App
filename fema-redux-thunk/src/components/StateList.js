import React from 'react'

import {connect} from 'react-redux'
import {fetchStatesUSA} from "../actions"

import StateCard from "./StateCard"

function StateList(props){
    return(
        <div>
            <button type="button" onClick={()=>props.fetchStatesUSA()}>Test Button to see data</button>
            {
                props.stateUSA.map(item=> 
                    <StateCard 
                    key={item.id} 
                    stateName={item.state} 
                    titleDR={item.title}
                    beganDate={item.declarationDate}
                    closeDate={item.disasterCloseOutDate}
                    />
                )
            }
            {props.error && <p>{props.error.message}</p>}
            {props.isFetching && <p>Come on now, we don't have that kind of time</p>}
        </div>


    )
}

const mapDispatchToProps = {
    fetchStatesUSA
}

export default connect(state => state, mapDispatchToProps)(StateList)

