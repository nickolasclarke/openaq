const fetch = require('isomorphic-fetch')

const url = '//api.openaq.org'
const get = (endpoint, options) => {
    if (!options) {
        return fetch(url + endpoint)
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server")
            }
            return response.json()
        })
    }
    return fetch(url + endpoint + options)
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server")
            }
            return response.json()
        })
}

class OpenAQ {
    cities(options) {
        if (options) return get('/v1/cities/?' + options)
        return get('/v1/cities/')
    }

    countries(options) {
        if (options) return get('/v1/countries/?' + options)
        return get('/v1/countries/')
    }

    fetches(options) {
        if (options) return get('/v1/fetches/?' + options)
        return get('/v1/fetches/')      
    }

    latest(options) {
        if (options) return get('/v1/latest/?' + options)
        return get('/v1/latest/')
    }

    locations(options){
        if (options) return get('/v1/locations/?' + options)
        return get('/v1/locations/')
    }

    measurements(options){
        if (options) return get('/v1/measurements/?' + options)
        return get('/v1/measurements/')
    }

    parameters(){
        return get('/v1/parameters/')
    }

    sources(options){
        if (options) return get('/v1/sources/?' + options)
        return get('/v1/sources/')
    }
}
module.exports = OpenAQ