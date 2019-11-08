import React, {useState} from 'react'

import {connect} from 'react-redux'
import {fetchStatesUSA, searchHandle} from "../actions"

import StateCard from "./StateCard"


import {Grid} from '@material-ui/core'




function StateList(props){
    const [name, setName] = useState("default")

    const handleNameChange = event => {
        setName(event.target.value)
        props.searchHandle(name)
    }

    return(
        <div>
        <section className="search-form">
        <form>
           <label name="search">Search: </label>
           <input name="search" type="text" placeholder="Search by Symbol" value={name} onChange={handleNameChange}/>
        </form>
       </section>
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
                    paProgramDeclared={item.paProgramDeclared}
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
    fetchStatesUSA,
    searchHandle
}

export default connect(state => state, mapDispatchToProps)(StateList)

//xs={12} sm={6} md={3}