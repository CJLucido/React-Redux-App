import axios from "axios"


export const FEMA_LOAD_SUCCESS = "FEMA_LOAD_SUCCESS"
        
export const FEMA_LOAD_FAILURE =  "FEMA_LOAD_FAILURE"

export const FEMA_LOADING =  "FEMA_LOADING"
  

export const femaLoadSuccess = data => ({
    type: FEMA_LOAD_SUCCESS,
    payload: data
})

export const femaLoadFailure = data => ({
    type: FEMA_LOAD_FAILURE,
    payload: data
})

export const femaLoading = () => ({
    type: FEMA_LOADING
})

export const fetchStatesUSA= () => dispatch =>{
    dispatch(femaLoading());
    axios
    .get('https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$orderby=state')
    .then(res =>
        dispatch(femaLoadSuccess(res.data.DisasterDeclarationsSummaries.splice(0,50)))
    )
    .catch(err => {
    dispatch(femaLoadFailure(err))}
    )
}

// https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$orderby=state