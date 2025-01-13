import { test, expect } from 'vitest'
import { cx } from './index.js'

test('returns empty string when passed no args', () => {
  expect(cx()).toBe('')
})

test('returns empty string when passed falsy arguments', () => {
  expect(cx(null, undefined, 0, false, void 0)).toBe('')
})

test('concatenates truthy string arguments into classNames string', () => {
  // @ts-expect-error - Testing undefined behavior
  expect(cx('kareem', 'abdul', 'jabbar', void 0 && 'larry-bird', 123)).toBe(
    'kareem abdul jabbar 123'
  )
})
