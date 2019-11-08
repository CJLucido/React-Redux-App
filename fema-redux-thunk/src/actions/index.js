import axios from "axios"




export const FEMA_LOAD_SUCCESS = "FEMA_LOAD_SUCCESS"
        
export const FEMA_LOAD_FAILURE =  "FEMA_LOAD_FAILURE"

export const FEMA_LOADING =  "FEMA_LOADING"

export const SET_QUERY = "SET_QUERY"
  

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
    .get("https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$filter=startswith(state,'FL')")
    .then(res =>
        dispatch(femaLoadSuccess(res.data.DisasterDeclarationsSummaries))
    )
    .catch(err => {
    dispatch(femaLoadFailure(err))}
    )
}

export const searchHandle = (name) => dispatch => {
    
    dispatch(femaLoading());
    axios
    .get(`https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$filter=startswith(state,'${name}')`)
    .then(res =>
    {    console.log('this is the search response', res)
        dispatch(femaLoadSuccess(res.data.DisasterDeclarationsSummaries))}
    )
    .catch(err => {
    dispatch(femaLoadFailure(err))}
    )
  }

// https://www.fema.gov/api/open/v1/DisasterDeclarationsSummaries?$orderby=state

//res.data.DisasterDeclarationsSummaries.splice(0,50))