const randomBytes = require('crypto').randomBytes

const MIN_VALUE = 0
const MAX_VALUE = 281474976710655
const RANDOM_BYTES = 6

const getRandomInteger = () => {
  return parseInt(randomBytes(RANDOM_BYTES).toString('hex'), 16)
}

const getRandomFractional = () => {
  return getRandomInteger() / MAX_VALUE
}

function prng (min = MIN_VALUE, max = MAX_VALUE) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Arguments must be of type number')
  }
  if (arguments.length === 1) {
    if (min < 0 || min > MAX_VALUE) {
      throw new RangeError(`Range must be within limits (inclusive): ${MIN_VALUE}-${MAX_VALUE}`)
    }
    return (getRandomInteger() / MAX_VALUE) * min
  } else if (arguments.length === 2) {
    if (min < max && min >= MIN_VALUE && max <= MAX_VALUE) {
      return Math.floor(getRandomFractional() * (max - min + 1)) + min
    } else {
      if (max > min) {
        throw new RangeError('Argument order is reversed')
      } else {
        throw new RangeError(`Range must be within limits (inclusive): ${MIN_VALUE}-${MAX_VALUE}`)
      }
    }
  } else {
    return getRandomInteger()
  }
}

module.exports = Object.assign(prng, { random: getRandomFractional, MAX_VALUE })
