jest.mock('./__mocks__/isomorphic-fetch.js')
jest.unmock('./__mocks__/responses.json')

const OpenAQ = require('../index')

const client = new OpenAQ
const responses = require('./__mocks__/responses.json')

//test /cities endpoint
test('GET endpoints are expected JSON objects', () => {
    return client.cities().then(data => {
        const jsonData = JSON.parse(data)
        expect(jsonData.results[0]).toHaveProperty('city')
    })
})

//test /countries endpoint
test('GET endpoints are expected JSON objects', () => {
    return client.countries().then(data => {
        const jsonData = JSON.parse(data)
        expect(jsonData.results[0]).toHaveProperty('code')
    })
})

//test /fetches endpoint
test('GET endpoints are expected JSON objects', () => {
    return client.fetches().then(data => {
        const jsonData = JSON.parse(data)
        expect(jsonData.results[0]).toHaveProperty('count')
    })
})

//test /latest endpoint
test('GET endpoints are expected JSON objects', () => {
    return client.latest().then(data => {
        const jsonData = JSON.parse(data)
        expect(jsonData.results[0]).toHaveProperty('location')
    })
})

//test /locations endpoint
test('GET endpoints are expected JSON objects', () => {
    return client.locations().then(data => {
        const jsonData = JSON.parse(data)
        expect(jsonData.results[0]).toHaveProperty('location')
    })
})

//test /measurements endpoint
test('GET endpoints are expected JSON objects', () => {
    return client.measurements().then(data => {
        const jsonData = JSON.parse(data)
        expect(jsonData.results[0]).toHaveProperty('parameter')
    })
})

//test /parameters endpoint
test('GET endpoints are expected JSON objects', () => {
    return client.parameters().then(data => {
        const jsonData = JSON.parse(data)
        expect(jsonData.results[0]).toHaveProperty('id')
    })
})

//test /sources endpoint
test('GET endpoints are expected JSON objects', () => {
    return client.sources().then(data => {
        const jsonData = JSON.parse(data)
        expect(jsonData.results[0]).toHaveProperty('url')
    })
})

// Helper method to loop through each? Too much? (also, currently doesnt work)
// function tester(method, expectedProp) {
//     return test('GET endpoints are expected JSON objects', () => {
//         return client[method]().then(data => {
//             const jsonData = JSON.parse(data)
//             expect(jsonData).toHaveProperty(Object.getOwnPropertyNames(data.results[expectedProp]))
//         })
//     })
// }
// tester("cities", "city")

