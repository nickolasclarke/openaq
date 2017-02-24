const fetch = require('isomorphic-fetch')

const url = '//api.openaq.org'
const get = (endpoint, params) => {
    if (!params) {
        return fetch(url + endpoint)
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server")
            }
            return response.json()
        })
    }
    return fetch(url + endpoint + params)
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server")
            }
            return response.json()
        })
}

class OpenAQ {
    cities(params) {
        if (params) return get('/v1/cities/?' + params)
        return get('/v1/cities/')
    }

    countries(params) {
        if (params) return get('/v1/countries/?' + params)
        return get('/v1/countries/')
    }

    fetches(params) {
        if (params) return get('/v1/fetches/?' + params)
        return get('/v1/fetches/')      
    }

    latest(params) {
        if (params) return get('/v1/latest/?' + params)
        return get('/v1/latest/')
    }

    locations(params){
        if (params) return get('/v1/locations/?' + params)
        return get('/v1/locations/')
    }

    measurements(params){
        if (params) return get('/v1/measurements/?' + params)
        return get('/v1/measurements/')
    }

    parameters(){
        return get('/v1/parameters/')
    }

    sources(params){
        if (params) return get('/v1/sources/?' + params)
        return get('/v1/sources/')
    }
}
module.exports = OpenAQ
