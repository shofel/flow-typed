/* @flow */
import R, { compose, add } from 'ramda'

let namedImports = compose(add(1))
let fromDefault = R.compose(R.add(3))

// $ExpectError
R.addd(1)
