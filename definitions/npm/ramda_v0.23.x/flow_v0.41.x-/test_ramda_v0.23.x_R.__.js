/**
 * Placeholder
 * !NOT IMPLEMENTED!
 * @TODO
 * @see http://ramdajs.com/docs/#__
 */
import {add, clamp, __ as _} from 'ramda'


/** binary function */
{
  let g0: number = add(1, 2)
  // $ExpectError
  let g1: number = add(_, 1)(2)
  // $ExpectError
  let g3: number = add(_, _)(1)(2)
  // $ExpectError
  let g2: number = add(_, _)(1, 2)
  // $ExpectError
  let g3: number = add(_, 2)(_, 3)(1)
}

/** binary function Errors */
{
  // $ExpectError
  let g0: string = add(1, 2)
  // $ExpectError
  let g1: string = add(_, 1)(2)
  // $ExpectError
  let g3: string = add(_, _)(1)(2)
  // $ExpectError
  let g2: string = add(_, _)(1, 2)
  // $ExpectError
  let g3: string = add(_, 2)(_, 3)(1)
}

/** ternary function */
{
  let g1: number = clamp(1, 2, 3)
  // $ExpectError
  let g2: number = clamp(_, 2, 3)(1)
  // $ExpectError
  let g2: number = clamp(_, _, 3)(1)(2)
  // $ExpectError
  let g2: number = clamp(_, _, 3)(1, 2)
  // $ExpectError
  let g2: number = clamp(_, 2, _)(1, 3)
  // $ExpectError
  let g2: number = clamp(_, 2)(1)(3)
  // $ExpectError
  let g2: number = clamp(_, 2)(1, 3)
  // $ExpectError
  let g2: number = clamp(_, 2)(_, 3)(1)
}

/** ternary function Errors */
{
  // $ExpectError
  let g1: string = clamp(1, 2, 3)
  // $ExpectError
  let g2: string = clamp(_, 2, 3)(1)
  // $ExpectError
  let g2: string = clamp(_, _, 3)(1)(2)
  // $ExpectError
  let g2: string = clamp(_, _, 3)(1, 2)
  // $ExpectError
  let g2: string = clamp(_, 2, _)(1, 3)
  // $ExpectError
  let g2: string = clamp(_, 2)(1)(3)
  // $ExpectError
  let g2: string = clamp(_, 2)(1, 3)
  // $ExpectError
  let g2: string = clamp(_, 2)(_, 3)(1)
}
