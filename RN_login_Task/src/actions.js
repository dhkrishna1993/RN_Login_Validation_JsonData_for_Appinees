import employeData from "./jsonData.json"

export function userChangeHandler(e) {
    return {
        type: 'USERNAME_CHANGE',
        payload: e
    }
}

export function passChangeHandler(e) {
    return {
        type: 'PASSWORD_CHANGE',
        payload: e
    }
}

export function inValidHandler(e) {
    return {
        type: 'INVALID',
        payload: e
    }
}
export function fetchJsonData(data) {
    return {
        type: "JSON_API_CALL",
        payload: employeData
    }

}



