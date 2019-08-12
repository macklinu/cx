import test from 'ava'
import cx from '.'

test('returns empty string when passed no args', t => {
  t.is(cx(), '')
})

test('returns empty string when passed falsy arguments', t => {
  t.is(cx(null, undefined, 0, false, void 0), '')
})

test('concatenates truthy string arguments into classNames string', t => {
  t.is(
    cx('kareem', 'abdul', 'jabbar', void 0 && 'larry-bird', 123),
    'kareem abdul jabbar'
  )
})
