import config from '../config'
// import TokenService from '../services/token-service'

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
    },
    postListing(listing) {
        return fetch(`${config.API_ENDPOINT}/list`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                listing
            })
        }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        )
    },
    deleteListing(username, listingId) {
        return fetch(`${config.API_ENDPOINT}/list/users/${username}/${listingId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${TokenService.getAuthToken()}`
            }
        }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        )
    },
    patchListing(username, listingId, listing) {
        return fetch(`${config.API_ENDPOINT}/list/users/${username}/${listingId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(
                listing
            )
        }).then(res =>
            !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
        )
    }
}

export default ListApiService