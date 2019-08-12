# cx

> A utility for creating className strings

## Installation

```sh
yarn add @macklinu/cx
```

## Usage

This is a simplified version of [classnames](https://github.com/JedWatson/classnames), where any truthy string argument to the `cx()` function will be turned into a class string.

```js
import cx from '@macklinu/cx'

cx('foo', 'bar') // 'foo bar'

// say state === 'loading'
cx('bg-red', 'text-white', state === 'loading' && 'is-loading') // 'bg-red text-white is-loading'

cx() // ''
```
