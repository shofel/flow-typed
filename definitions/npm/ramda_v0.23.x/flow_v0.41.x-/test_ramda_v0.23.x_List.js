// @flow
/**
 * Tests for the functions labled 'List'
 */
import R from 'ramda'

/**
 * adjust
 * (a → a) → Number → [a] → [a]
 */
{
  let xs1: Array<number> = R.adjust(R.add(10), 1, [1, 2, 3])
  let xs2: Array<number> = R.adjust(R.add(10))(1)([1, 2, 3])
  // $ExpectError
  let xs3: Array<number> = R.adjust(R.add(10), 'x', [1, 2, 3])
  // $ExpectError
  let xs3: Array<string> = R.adjust(R.add(10), 1, [1, 2, 3])
  // $ExpectError
  let xs3: Array<string> = R.adjust(R.add(10))(1)([1, 2, 3])
}

/**
 * all
 * (a → Boolean) → [a] → Boolean
 */
{
  let equals3 = R.equals(3)
  let xs = [3, 3, 3, 4]
  let b1: boolean = R.all(equals3)(xs)
  // $ExpectError
  let b3: number = R.all(equals3)(xs)
}
