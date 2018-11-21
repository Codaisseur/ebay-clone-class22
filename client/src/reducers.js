const initialState = {
    ads: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADS_LOADED":
            return {
                ...state,
                ads: action.payload
            }
        default:
            return state
    }
}