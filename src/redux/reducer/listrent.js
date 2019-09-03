const initialState = {
    data : 'tes'
}

export default function ListKost(state = initialState, action){
    switch(action.type){
        case 'GET_RENTS':
            return {
                ...state,
                data : action.payload
            }
        case 'GET_RENTS_SUCCESS':
            return {
                ...state,
                data : action.payload.data
            }
        default :
            return state
    }
}