const test = require('tape')
const prng = require('./index.js')

test('prng', assert => {
  assert.ok(typeof prng === 'function', 'is a function')
  assert.ok(typeof prng.random === 'function')
  assert.ok(prng.hasOwnProperty('MAX_VALUE'), 'has constant with max value')
  assert.end()
})

test('prng()', assert => {
  assert.throws(() => prng(-1))
  assert.throws(() => prng(prng.MAX_VALUE+1))
  assert.throws(() => prng(-1, 10))
  assert.throws(() => prng(1, prng.MAX_VALUE+1))
  assert.throws(() => prng(10, 1))
  const message = '0 <= random number <= prng.MAX_VALUE'
  for (let i = 0; i <= 1000; i++) {
    const actual = prng()
    assert.ok(actual <= prng.MAX_VALUE && actual >= 0, message)
  }
  assert.end()
})

test('prng(5)', assert => {
  const message = '0 <= random number <= 5'
  for (let i = 0; i <= 1000; i++) {
    const actual = prng(5)
    assert.ok(actual <= 5 && actual >= 0, message)
  }
  assert.end()
})

test('prng(0, 5)', assert => {
  const message = '0 <= random number <= 5'
  for (let i = 0; i <= 1000; i++) {
    const min = 0
    const max = 5
    const actual = prng(min, max)
    assert.ok(actual <= max && actual >= min, message)
  }
  assert.end()
})

test('prng(20, 25)', assert => {
  const message = '20 <= random number <= 25'
  for (let i = 0; i <= 1000; i++) {
    const min = 20
    const max = 25
    const actual = prng(min, max)
    assert.ok(actual <= max && actual >= min, message)
  }
  assert.end()
})

test('prng(prng.MAX_VALUE - 5, prng.MAX_VALUE)', assert => {
  const message = `${prng.MAX_VALUE-5} <= random number <= ${prng.MAX_VALUE}`
  for (let i = 0; i <= 1000; i++) {
    const actual = prng(prng.MAX_VALUE-5, prng.MAX_VALUE)
    assert.ok(prng.MAX_VALUE-5 <= actual && actual <= prng.MAX_VALUE, message)
  }
  assert.end()
})

test('prng.random()', assert => {
  const message = '0 >=  <= 1'
  for (let i = 0; i <= 1000; i++) {
    const actual = prng.random()
    assert.ok(actual <= 1 && actual >= 0, message)
  }
  assert.end()
})
