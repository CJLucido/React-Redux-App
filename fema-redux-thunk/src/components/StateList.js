import React from 'react'

import {connect} from 'react-redux'
import {fetchStatesUSA} from "../actions"

function StateList(props){
    return(
        <div>
            <button type="button" onClick={()=>props.fetchStatesUSA()}>Test Button to see data</button>
        
        </div>


    )
}

const mapDispatchToProps = {
    fetchStatesUSA
}

export default connect(state => state, mapDispatchToProps)(StateList)