# openaq
A ES6 promise-based JS client for the [OpenAQ](https://openaq.org) API

## Install:
```bash
npm install openaq
```
```javascript 
const openaq = require('openaq')
const client = new openaq
```

## API:
Methods for all endpoints have been implemented. All parameters, if any, for each endpoint are supported as a single URL encoded argument, as seen in the examples.

### [.getCities(params)](https://docs.openaq.org/#api-Cities)
- example:
```javascript
cities().then(results => {
  //results here
})

//with optional parameters
cities('country=US&page=2').then(results => {
  //results here
})
```

### [.countries(params)](https://docs.openaq.org/#api-Countries)
- example:
```javascript
countries().then(results => {
  //results here
})

//with optional parameters
countries('limit=10&page=2').then(results => {
  //results here
})
```
### [.fetches(params)](https://docs.openaq.org/#api-Fetches)
- example:
```javascript
fetches().then(results = {
  //results here
})

//with optional parameters
fetches('limit=10&page=2').then(results => {
  //results here
})
```

### [.latest(params)](https://docs.openaq.org/#api-Latest)
- example:
```javascript
latest().then(results => {
  //results here
})

//with optional parameters
latest('location=Bowling%20Green&parameter=o3').then(results => {
  //results here
})
```

### [.locations(params)](https://docs.openaq.org/#api-Locations)
- example:
```javascript
locations().then(results => {
  //results here
})

//with optional parameters
locations('location=Bowling%20Green&parameter=o3').then(results => {
  //results here
})
```

### [.measurements(params)](https://docs.openaq.org/#api-Measurements)
- example:
```javascript
measurements().then(results => {
  //results here
})

//with optional parameters
measurements('location=Bowling%20Green&parameter=o3').then(results => {
  //results here
})
```

### [.parameters()](https://docs.openaq.org/#api-Parameters)
- example:
```javascript
parameters().then(results => {
  //results here
})
```

### [.sources(params)](https://docs.openaq.org/#api-Sources)
- example:
```javascript

sources().then(results => {
  //results here
})

//with optional parameters
sources('limit=10&page=2').then(results => {
  //results here
})
```
## TODO
- add testing
- improved `params` handling
- make isomorphic (commonJS and ES2015 module support)
