# @macklinu/cx

## 2.0.0

### Major Changes

- 77d0ac5: Replace implementation with [clsx][] and [tailwind-merge][]

  Major changes:

  - Only support Node.js >=18
  - Replace default export with named export

  ```diff
  - import cx from '@macklinu/cx'
  + import { cx } from '@macklinu/cx'
  ```

  - Replace implementation with [clsx][] and [tailwind-merge][], which may result in some minor breaking changes (at least according to me running the unit tests 4 years later 😂).

  [clsx]: https://github.com/lukeed/clsx
  [tailwind-merge]: https://github.com/dcastil/tailwind-merge
