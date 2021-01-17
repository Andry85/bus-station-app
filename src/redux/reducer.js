
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

        if (action.value !== '') {
            let list = state.data.find(item => item.from === action.value).arrival;
            let destinations = list.map(item => item.destination);
            return {
                ...state,
                selectedFrom: action.value,
                destinationList: destinations,
                departureList: [],
                path: {
                    stops: []
                }
            }
        } else {
            return {
                ...state,
                selectedFrom: action.value,
                destinationList: [],
                departureList: [],
                selectedTime: '',
                selectedTo: '',
                path: {
                    stops: []
                }
            }
        }
        
        case CHANGE_TO: 

        if (action.value !== '') {
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
        } else {
            return {
                ...state,
                selectedTo: action.value,
                departureList: [],
                selectedTime: '',
                path: {
                    stops: []
                }
            }
        }
        

           
        case CHANGE_DATE: 

            let dayOf;

            switch(action.value.getDay()) {
                case 0:
                    dayOf = 'Sunday'
                    break; 
                case 1:
                    dayOf = 'Monday'
                    break;
                case 2:
                    dayOf = 'Tuesday'
                    break;
                case 3:
                    dayOf = 'Wednesday'
                    break; 
                case 4:
                    dayOf = 'Thursday'
                    break;
                case 5:
                    dayOf = 'Friday'
                    break; 
                case 6:
                    dayOf = 'Saturday'
                    break;
            }

            return {
                ...state,
                weekDay: dayOf,
                path: {
                    stops: []
                }
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
            let shedulesList = tripList.find(item => item.departure === state.selectedTime).schedule;


            let isWorking = true;

            shedulesList.map((item) => {
                if (item.dayOfWeek === state.weekDay && item.status === false) {
                    isWorking = false;
                }
            })


            let dayOn = false;
            let dayOff = false;

            if (stopsList && isWorking) {
                dayOn = true;
              }
          
          
              if (stopsList && !isWorking) {
                dayOff = true;
              }


            return {
                ...state,
                path: {
                    stops: stopsList,
                    shedules: shedulesList,
                    isWorking: isWorking,
                    dayOn: dayOn,
                    dayOff: dayOff
                }
        }
        default: return state;
    }
}

export default reducer;