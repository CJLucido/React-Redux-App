import React from 'react'

import {connect} from 'react-redux'
import {fetchStatesUSA} from "../actions"

import StateCard from "./StateCard"

import { makeStyles } from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

function StateList(props){
    return(
        <div>
            <button type="button" onClick={()=>props.fetchStatesUSA()}>Test Button to see data</button>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="flex-start"
            >{

                props.stateUSA.map(item=> 
                    <StateCard 
                    key={item.id} 
                    stateName={item.state} 
                    titleDR={item.title}
                    beganDate={item.declarationDate}
                    closeDate={item.disasterCloseOutDate}
                    iaProgramDeclared={item.iaProgramDeclared}
                    hmProgramDeclared={item.hmProgramDeclared}
                    disasterType={item.disasterType}
                    disasterNumber={item.disasterNumber}
                    />
                )


            }
            </Grid>
            {props.error && <p>{props.error.message}</p>}
            {props.isFetching && <p>Come on now, we don't have that kind of time</p>}
        </div>


    )
}

const mapDispatchToProps = {
    fetchStatesUSA
}

export default connect(state => state, mapDispatchToProps)(StateList)

//xs={12} sm={6} md={3}