# prng48

Psuedo random number generator which uses `randomBytes()` from the Node.js crypto module under the hood.

``` javascript
npm i --save prng48
```

## Usage
``` javascript
const prng = require('prng48')

console.log(prng())
// 0 - 281474976710655

console.log(prng(10))
// 0 - 10

console.log(prng(100, 150))
// 100 - 150

console.log(prng.random())
// 0 - 1 e.g. 0.8869092848824027

console.log(prng.MAX_VALUE)
// 281474976710655
```
