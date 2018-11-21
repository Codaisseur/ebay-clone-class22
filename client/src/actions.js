import request from 'superagent'

const baseUrl = process.env.API_BASE_URL || 'http://localhost:4000'

export function loadAds() {
    console.log("loadAds")
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

export function saveAd(ad) {
    console.log('hey')
    return (dispatch) => {
        request.post(`${baseUrl}/advertisements`)
            .send(ad)
            .then(() => {
                dispatch(loadAds())
            })
    }
}