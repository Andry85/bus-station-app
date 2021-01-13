
import {CHANGE_FROM} from './actions';
import {CHANGE_TO} from './actions';
import {CHANGE_DATE} from './actions';
import {CHANGE_TIME} from './actions';
import {CHANGE_PATH} from './actions';
import initialState from './initialState';

let tripList;

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_FROM: 
            let list = state.data.find(item => item.from === action.value).arrival;
            let destinations = list.map(item => item.destination);
            return {
                ...state,
                selectedFrom: action.value,
                destinationList: destinations,
                path: {
                    stops: []
                }
        }
        case CHANGE_TO: 

            let cityLists = state.data.find(item => item.from === state.selectedFrom).arrival;
            tripList = cityLists.find(item => item.destination === action.value).trip;
            let times = tripList.map(item => item.departure);
            
            return {
                ...state,
                selectedTo: action.value,
                departureList: times,
                path: {
                    stops: []
                }
        }
        case CHANGE_DATE: 

            return {
                ...state,
                weekDay: action.value.getDay()
        }
        case CHANGE_TIME: 

            return {
                ...state,
                selectedTime: action.value,
                path: {
                    stops: []
                }
        }
        case CHANGE_PATH: 

            let stopsList = tripList.find(item => item.departure === state.selectedTime).stops;

            return {
                ...state,
                path: {
                    stops: stopsList
                }
        }
        default: return state;
    }
}

export default reducer;