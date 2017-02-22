const babel = ('babel')
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

export default class OpenAQ {
    cities(options) {
        options => { 
            if (options) return get('/v1/cities/' + options)
            return get('/v1/cities/')
        }
    }

    countries(options) {
        options => { 
            if (options) return get('/v1/countries/' + options)
            return get('/v1/countries/')
        }
    }
    fetches(options) {
        options => { 
            if (options) return get('/v1/fetches/' + options)
            return get('/v1/fetches/')
        }
    }
    latest(options) {
        options => { 
            if (options) return get('/v1/latest/' + options)
            return get('/v1/latest/')
        }
    }
    locations(options){
        options => { 
            if (options) return get('/v1/locations/' + options)
            return get('/v1/locations/')
        }
    }
    measurements(options){
        options => { 
            if (options) return get('/v1/measurements/' + options)
            return get('/v1/measurements/')
        }
    }
    params(){
        options => { 
            if (options) return get('/v1/params/' + options)
            return get('/v1/params/')
        }
    }
    sources(options){
        options => { 
            if (options) return get('/v1/sources/' + options)
            return get('/v1/sources/')
        }
    }
}
