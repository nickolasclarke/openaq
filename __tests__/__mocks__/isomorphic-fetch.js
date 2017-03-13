jest.unmock('./responses.json')
const responses = require('./responses.json')

function fetch(url) {
  return new Promise((resolve, reject) => {
    const endPoint = /[^/]*/.exec(url.substr(20))[0]
    const response = {
      json() {
        let template = {
          "meta": responses.meta,
          "results": [responses[endPoint]]
        }
        return JSON.stringify(template)
      }
    }
    process.nextTick(() => {
      if (responses[endPoint]) {
        resolve(response)
      }
      reject({
        "statusCode": 404,
        "error": "Not Found"
      })
    })
  })
}

module.exports = fetch

