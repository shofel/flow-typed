// @flow
import R from 'ramda'

type Unary<T1, T2> = T1 => T2

type A = 'type A'
type B = 'type B'
type C = 'type C'
type D = 'type D'
type E = 'type E'
type F = 'type F'

declare var ab: Unary<A, B>
declare var bc: Unary<B, C>
declare var cd: Unary<C, D>
declare var de: Unary<D, E>
declare var ef: Unary<E, F>

/* TODO: when the last fn is non-unary */

/* works well with one fn */
{
  let f1: Unary<A, B> = R.compose(ab)
  // $ExpectError
  let f2: Unary<A, A> = R.compose(ab)
}

/* two functions */
{
  let f1: Unary<A, C> = R.compose(bc, ab)
  // $ExpectError
  let f2: Unary<A, B> = R.compose(bc, ab)
  // $ExpectError
  let f3 = R.compose(cd, ab)
  // $ExpectError
  let f4: string = R.compose(R.equals(2), R.add(1))(1)
}

/* three functions */

