export const FEMA_LOAD_SUCCESS = "FEMA_LOAD_SUCCESS"
        
export const FEMA_LOAD_FAILURE =  "FEMA_LOAD_FAILURE"

export const FEMA_LOADING =  "FEMA_LOADING"
  

export const femaLoadSuccess = data => ({
    type: FEMA_LOAD_SUCCESS,
    payload: data
})