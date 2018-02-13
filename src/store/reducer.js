import { LOAD_NOTES, DATA_STATUS_HANDLER } from './actions'

const initialState = {
    notes: [],

}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_NOTES:
            return {...state, notes: action.payload, loadingData: false, notesLoadSuccess: true};
        case DATA_STATUS_HANDLER:
            return { ...state, [action.payload.type]: action.payload.result, displayAlert: action.payload.result};
        default:
            return state;
    }
}
