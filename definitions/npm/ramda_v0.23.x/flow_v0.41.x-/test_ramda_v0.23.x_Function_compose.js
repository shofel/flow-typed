// @flow
import R from 'ramda'

type A = 'type A'
type B = 'type B'
type C = 'type C'
type D = 'type D'
type E = 'type E'
type F = 'type F'

declare var ab: (A => B)
declare var bc: (B => C)
declare var cd: (C => D)
declare var de: (D => E)
declare var ef: (E => F)

/* TODO: when the last fn is non-unary */

/* works well with one fn */
{
  let f1: (A => B) = R.compose(ab)
  // $ExpectError
  let f2: (A => A) = R.compose(ab)
}

/* two functions */
{
  let f1: (A => C) = R.compose(bc, ab)
  // $ExpectError
  let f2: (A => B) = R.compose(bc, ab)
  // $ExpectError
  let f3 = R.compose(cd, ab)
  // $ExpectError
  let f4: string = R.compose(R.equals(2), R.add(1))(1)
}

/* three functions */
{
  let f1: (A => D) = R.compose(cd, bc, ab)
}

