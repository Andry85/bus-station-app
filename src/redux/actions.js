export const CHANGE_FROM = 'CHANGE_FROM';
export const CHANGE_TO = 'CHANGE_TO';

 

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
