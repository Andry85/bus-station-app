
import {CHANGE_FROM} from './actions';
import {CHANGE_TO} from './actions';
import initialState from './initialState';



const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_FROM: 
            let list = state.data.find(item => item.from === action.value).arrival;
            let destinations = list.map(item => item.destination);
            return {
                ...state,
                selectedFrom: action.value,
                destinationList: destinations
        }
        case CHANGE_TO: 

            let cityLists = state.data.find(item => item.from === state.selectedFrom).arrival;
            let tripList = cityLists.find(item => item.destination === action.value).trip;
            let times = tripList.map(item => item.departure);
            
            return {
                ...state,
                selectedTo: action.value,
                departureList: times
        }
        default: return state;
    }
}

export default reducer;