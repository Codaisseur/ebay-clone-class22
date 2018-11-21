import request from 'superagent'

const baseUrl = process.env.API_BASE_URL || 'http://localhost:4000'

export function loadAds() {
    return (dispatch) => {
        request(`${baseUrl}/advertisements`)
            .then(response => {
                dispatch({
                    type: "ADS_LOADED",
                    payload: response.body.data
                })
            })
            .catch(console.error)
    }
}