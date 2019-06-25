import config from '../config'

const ListApiService = {
    getList() {
        return fetch(`${config.API_ENDPOINT}/list`, {
            headers: {}
        }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
    },
    getListing(listingId) {
        return fetch(`${config.API_ENDPOINT}/list/${listingId}`, {
            headers: {
                // authorization: `bearer ${TokenService.getAuthToken()}`
            }
        }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        )
    },
    getMyList(myUserName) {
        return fetch(`${config.API_ENDPOINT}/list/users/${myUserName}`, {
            headers: {
                // authorization: `bearer ${TokenService.getAuthToken()}`
            }
        }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        )
    }
}

export default ListApiService