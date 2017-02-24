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
### .getCities(params)
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

### .countries(params)
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
### .fetches(params)
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

### .latest(params)
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

### .locations(params)
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

### .measurements(params)
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

### .parameters()
- example:
```javascript
parameters().then(results => {
  //results here
})
```

### .sources(params)
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
##TODO
- add testing
- improved `params` handling
- make isomorphic (commonJS and ES2015 module support)
