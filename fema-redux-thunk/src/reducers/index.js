
import {FEMA_LOAD_SUCCESS, FEMA_LOAD_FAILURE,FEMA_LOADING} from "../actions"



const initialState = {
    stateUSA: null, //not sure if this will be an object or array
    isFetching: false,
    error: null
}

export function reducer(state=initialState, action) {
    switch(action.type){
        case FEMA_LOAD_SUCCESS:
            return {
                ...state,
                stateUSA: action.payload,
                isFetching: false,
                error: null
            }
        case FEMA_LOAD_FAILURE:
            return {
                ...state,
                stateUSA: null,
                isFetching: false,
                error: action.payload
            }
        case FEMA_LOADING:
            return {
                ...state,
               isFetching: true,
               error: null 
            }
        default:
            return state
    }


}