export const CHANGE_FROM = 'CHANGE_FROM';
export const CHANGE_TO = 'CHANGE_TO';
export const CHANGE_DATE = 'CHANGE_DATE';
export const CHANGE_TIME = 'CHANGE_TIME';
export const CHANGE_PATH = 'CHANGE_PATH';

 

export function changeFrom(value) {
    return {
        type: CHANGE_FROM,
        value: value
    }
}

export function changeTo(value) {
    return {
        type: CHANGE_TO,
        value: value
    }
}

export function changeDate(value) {
    return {
        type: CHANGE_DATE,
        value: value
    }
}

export function changeTime(value) {
    return {
        type: CHANGE_TIME,
        value: value
    }
}

export function changePath() {
    return {
        type: CHANGE_PATH,
    }
}


