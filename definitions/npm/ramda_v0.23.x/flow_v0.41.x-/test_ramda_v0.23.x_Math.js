/**
 * Tests for the functions labled 'Math'
 */
import {
  inc, dec, negate,
  add, subtract, divide, multiply, modulo,
  sum, product,
  mathMod, mean, median,
} from 'ramda'

/**
 * unary: number => number
 */

/** dec: number => number */
{
  let x1: number = dec(1)

  // $ExpectError
  dec()
  // $ExpectError
  dec('one')
  // $ExpectError
  dec(null)
}

/** inc: number => number */
{
  let x1: number = inc(1)

  // $ExpectError
  inc()
  // $ExpectError
  inc('one')
  // $ExpectError
  inc(null)
}

/** negate: number => number */
{
  let x1: number = negate(1)

  // $ExpectError
  negate()
  // $ExpectError
  negate('one')
  // $ExpectError
  negate(null)
}

/**
 * binary: number => number => number
 */

/** add: number => number => number */
{
  let x1: number = add(1)(2)
  let x2: number = add(1, 2)

  // $ExpectError
  let x3: string = add(1)(2)
  // $ExpectError
  let x4: string = add(1)(2)

  // $ExpectError
  let x5 = add('string')(2)
  // $ExpectError
  let x6 = add(2)('string')
  // $ExpectError
  let x5 = add('string')(2)

  // $ExpectError
  let y1 = add(1)(2)(3)

  /* Though this does not fail in Ramda. How to deal with this? */
  // $ExpectError
  let x6 = add()(1)()(2)
}

/** subtract: number => number => number */
{
  let x1: number = subtract(1)(2)
  let x2: number = subtract(1, 2)

  // $ExpectError
  let x3: string = subtract(1)(2)
  // $ExpectError
  let x4: string = subtract(1)(2)

  // $ExpectError
  let x5 = subtract('string')(2)
  // $ExpectError
  let x6 = subtract(2)('string')
  // $ExpectError
  let x5 = subtract('string')(2)

  // $ExpectError
  let y1 = subtract(1)(2)(3)

  /* Though this does not fail in Ramda. How to deal with this? */
  // $ExpectError
  let x6 = subtract()(1)()(2)
}

/** divide: number => number => number */
{
  let x1: number = divide(1)(2)
  let x2: number = divide(1, 2)

  // $ExpectError
  let x3: string = divide(1)(2)
  // $ExpectError
  let x4: string = divide(1)(2)

  // $ExpectError
  let x5 = divide('string')(2)
  // $ExpectError
  let x6 = divide(2)('string')
  // $ExpectError
  let x5 = divide('string')(2)

  // $ExpectError
  let y1 = divide(1)(2)(3)

  /* Though this does not fail in Ramda. How to deal with this? */
  // $ExpectError
  let x6 = divide()(1)()(2)
}

/** modulo: number => number => number */
{
  let x1: number = modulo(1)(2)
  let x2: number = modulo(1, 2)

  // $ExpectError
  let x3: string = modulo(1)(2)
  // $ExpectError
  let x4: string = modulo(1)(2)

  // $ExpectError
  let x5 = modulo('string')(2)
  // $ExpectError
  let x6 = modulo(2)('string')
  // $ExpectError
  let x5 = modulo('string')(2)

  // $ExpectError
  let y1 = modulo(1)(2)(3)

  /* Though this does not fail in Ramda. How to deal with this? */
  // $ExpectError
  let x6 = modulo()(1)()(2)
}

/** mathMod: number => number => number */
{
  let x1: number = mathMod(1)(2)
  let x2: number = mathMod(1, 2)

  // $ExpectError
  let x3: string = mathMod(1)(2)
  // $ExpectError
  let x4: string = mathMod(1)(2)

  // $ExpectError
  let x5 = mathMod('string')(2)
  // $ExpectError
  let x6 = mathMod(2)('string')
  // $ExpectError
  let x5 = mathMod('string')(2)

  // $ExpectError
  let y1 = mathMod(1)(2)(3)

  /* Though this does not fail in Ramda. How to deal with this? */
  // $ExpectError
  let x6 = mathMod()(1)()(2)
}

/** divide: number => number => number */
{
  let x1: number = divide(1)(2)
  let x2: number = divide(1, 2)

  // $ExpectError
  let x3: string = divide(1)(2)
  // $ExpectError
  let x4: string = divide(1)(2)

  // $ExpectError
  let x5 = divide('string')(2)
  // $ExpectError
  let x6 = divide(2)('string')
  // $ExpectError
  let x5 = divide('string')(2)

  // $ExpectError
  let y1 = divide(1)(2)(3)

  /* Though this does not fail in Ramda. How to deal with this? */
  // $ExpectError
  let x6 = divide()(1)()(2)
}

/**
 * Array<number> => number
 */

/** sum: (Array<number>) => number */
{
  let x1: number = sum([1])
  let x2: number = sum([1, 2])

  // We might want this to fail but it's not
  let x3: number = sum([])

  // $ExpectError
  let x4: string = sum([1])
  // $ExpectError
  let x5 = sum(['one'])
}

/** product: (Array<number>) => number */
{
  let x1: number = product([1])
  let x2: number = product([1, 2])

  // We might want this to fail but it's not
  let x3: number = product([])

  // $ExpectError
  let x4: string = product([1])
  // $ExpectError
  let x5 = product(['one'])
}

/** mean: (Array<number>) => number */
{
  let x1: number = mean([1])
  let x2: number = mean([1, 2])

  // We might want this to fail but it's not
  let x3: number = mean([])

  // $ExpectError
  let x4: string = mean([1])
  // $ExpectError
  let x5 = mean(['one'])
}

/** median: (Array<number>) => number */
{
  let x1: number = median([1])
  let x2: number = median([1, 2])

  // We might want this to fail but it's not
  let x3: number = median([])

  // $ExpectError
  let x4: string = median([1])
  // $ExpectError
  let x5 = median(['one'])
}
